"""Package the built portfolio into one file that works with a file:// URL."""

import base64
import html
import json
import mimetypes
import re
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "out"
MANIFEST = ROOT / ".next/routes-manifest.json"
BASE_PATH = json.loads(MANIFEST.read_text()).get("basePath", "") if MANIFEST.is_file() else ""
DESTINATION = ROOT / "Yeming-Portfolio.html"
VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
OMIT_TAGS = {"script", "noscript", "link", "meta", "style"}


@dataclass
class Node:
    tag: str
    attrs: dict = field(default_factory=dict)
    children: list = field(default_factory=list)

    def walk(self):
        yield self
        for child in self.children:
            if isinstance(child, Node):
                yield from child.walk()

    def text(self):
        return "".join(child.text() if isinstance(child, Node) else child for child in self.children)


class Document(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.root = Node("document")
        self.stack = [self.root]
        self.feed(source)
        self.close()

    def handle_starttag(self, tag, attrs):
        node = Node(tag, dict(attrs))
        self.stack[-1].children.append(node)
        if tag not in VOID_TAGS:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID_TAGS:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                self.stack = self.stack[:index]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def unprefix(path):
    if BASE_PATH and (path == BASE_PATH or path.startswith(BASE_PATH + "/")):
        return path[len(BASE_PATH):] or "/"
    return path


def local_asset(url, relative_to=OUT):
    path = unprefix(urlsplit(url).path)
    candidate = (OUT / path.lstrip("/")) if path.startswith("/") else relative_to / path
    candidate = candidate.resolve()
    if not candidate.is_relative_to(OUT) or not candidate.is_file():
        raise ValueError(f"Missing or non-export asset: {url}")
    return candidate


def data_url(path):
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    return f"data:{mime};base64,{base64.b64encode(path.read_bytes()).decode('ascii')}"


def serialize(node, route, routes, assets):
    if isinstance(node, str):
        return html.escape(node, quote=False)
    if node.tag in OMIT_TAGS:
        return ""
    attrs = dict(node.attrs)
    if node.tag == "a" and attrs.get("href"):
        url = urlsplit(attrs["href"])
        if not url.scheme and not url.netloc:
            path = unprefix(url.path) or route
            if path.lower().endswith(".pdf"):
                attrs["href"] = data_url(local_asset(url.path))
            elif path not in routes:
                raise ValueError(f"Unknown local page in {route}: {attrs['href']}")
            else:
                attrs["href"] = "#" + path + ("?" + url.query if url.query else "") + ("#" + url.fragment if url.fragment else "")
    if node.tag == "img" and attrs.get("src"):
        source = attrs.pop("src")
        assets.setdefault(source, data_url(local_asset(source)))
        attrs["data-offline-image"] = source
        attrs.pop("srcset", None)
    rendered_attrs = "".join(f' {key}' if value is None else f' {key}="{html.escape(str(value), quote=True)}"' for key, value in attrs.items())
    result = f"<{node.tag}{rendered_attrs}>"
    if node.tag not in VOID_TAGS:
        result += "".join(serialize(child, route, routes, assets) for child in node.children)
        result += f"</{node.tag}>"
    return result


def main():
    if not (OUT / "index.html").is_file():
        raise SystemExit("Build the site first: npm run build")
    sources = sorted(path for path in OUT.rglob("index.html") if path.relative_to(OUT).parts[0] not in {"404", "_not-found"})
    routes = {"/" + path.relative_to(OUT).as_posix().removesuffix("index.html"): path for path in sources}
    documents = {route: Document(path.read_text(encoding="utf-8")) for route, path in routes.items()}
    metadata, bodies, assets, styles = {}, {}, {}, []

    for route, document in documents.items():
        nodes = list(document.root.walk())
        title = next(node for node in nodes if node.tag == "title").text()
        lang = next(node for node in nodes if node.tag == "html").attrs["lang"]
        description = next((node.attrs.get("content", "") for node in nodes if node.tag == "meta" and node.attrs.get("name") == "description"), "")
        metadata[route] = {"title": title, "lang": lang, "description": description}
        body = next(node for node in nodes if node.tag == "body")
        bodies[route] = "".join(serialize(child, route, routes, assets) for child in body.children)
        for node in nodes:
            if node.tag == "link" and node.attrs.get("rel") == "stylesheet":
                path = local_asset(node.attrs["href"])
                if path not in styles:
                    styles.append(path)

    def inline_css(path):
        def replace(match):
            url = match.group(2).strip()
            if url.startswith(("data:", "#")):
                return match.group(0)
            if urlsplit(url).scheme or url.startswith("//"):
                raise ValueError(f"External CSS asset cannot be offline: {url}")
            return f'url("{data_url(local_asset(url, path.parent))}")'
        return re.sub(r"url\(\s*(['\"]?)(.*?)\1\s*\)", replace, path.read_text(encoding="utf-8"))

    css = "\n".join(inline_css(path) for path in styles)
    # A filtered row's display:grid must not override the HTML hidden attribute.
    css += "\n[hidden]{display:none!important}#offline-view{display:contents}#offline-view main:focus{outline:none}\n"
    css = re.sub(r"</style", r"<\/style", css, flags=re.IGNORECASE)
    default_route = "/"
    default = metadata[default_route]
    payload = json.dumps({"pages": metadata, "assets": assets, "defaultRoute": default_route}, ensure_ascii=False).replace("<", "\\u003c")
    templates = "\n".join(f'<template data-route="{html.escape(route, quote=True)}">{body}</template>' for route, body in bodies.items())
    runtime = (ROOT / "scripts/offline-runtime.js").read_text(encoding="utf-8")
    if "</script" in runtime.lower():
        raise ValueError("Runtime contains an HTML script terminator")
    favicon = data_url(OUT / "favicon.svg")
    output = f'''<!doctype html>
<html lang="{default['lang']}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#101411">
<meta name="description" content="{html.escape(default['description'], quote=True)}">
<title>{html.escape(default['title'])}</title>
<link rel="icon" href="{favicon}"><style>{css}</style></head><body>
<div id="offline-view">{bodies[default_route]}</div>
{templates}
<script id="offline-data" type="application/json">{payload}</script>
<script>{runtime}</script></body></html>'''
    temporary = DESTINATION.with_suffix(".html.tmp")
    try:
        temporary.write_text(output, encoding="utf-8")
        temporary.replace(DESTINATION)
    finally:
        temporary.unlink(missing_ok=True)
    print(f"Offline portfolio: {DESTINATION.name} ({len(routes)} pages, {DESTINATION.stat().st_size / 1024 / 1024:.1f} MiB)")


if __name__ == "__main__":
    main()
