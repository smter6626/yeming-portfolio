"""Build and publish the static portfolio to the dedicated GitHub Pages branch."""

import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent.parent


def output(args, cwd=ROOT):
    return subprocess.check_output(args, cwd=cwd, text=True).strip()


def run(args, cwd=ROOT, env=None):
    subprocess.run(args, cwd=cwd, env=env, check=True)


def main():
    if output(["git", "status", "--porcelain"]):
        raise SystemExit("Commit source changes before publishing.")

    repo = output(["gh", "repo", "view", "--json", "nameWithOwner", "--jq", ".nameWithOwner"])
    pages = json.loads(output(["gh", "api", f"repos/{repo}/pages"]))
    base_path = urlsplit(pages["html_url"]).path.rstrip("/")
    source = output(["git", "rev-parse", "HEAD"])
    author = {key: output(["git", "config", f"user.{key}"]) for key in ("name", "email")}

    env = dict(os.environ, NEXT_PUBLIC_BASE_PATH=base_path, NEXT_TELEMETRY_DISABLED="1")
    run(["npm", "run", "build"], env=env)

    # Use the existing GitHub CLI login without putting a token in a URL or file.
    git = ["git", "-c", "credential.helper=", "-c", "credential.helper=!gh auth git-credential"]
    remote = f"https://github.com/{repo}.git"
    branch = "refs/heads/gh-pages"
    existing = output(git + ["ls-remote", "--heads", remote, branch])

    with tempfile.TemporaryDirectory(prefix="portfolio-pages-") as directory:
        checkout = Path(directory)
        run(["git", "init", "--initial-branch=gh-pages"], cwd=checkout)
        run(["git", "remote", "add", "origin", remote], cwd=checkout)
        for key, value in author.items():
            run(["git", "config", f"user.{key}", value], cwd=checkout)
        if existing:
            run(git + ["fetch", "--depth=1", "origin", "gh-pages"], cwd=checkout)
            run(["git", "reset", "--hard", "FETCH_HEAD"], cwd=checkout)

        for child in checkout.iterdir():
            if child.name == ".git":
                continue
            if child.is_dir() and not child.is_symlink():
                shutil.rmtree(child)
            else:
                child.unlink()
        shutil.copytree(ROOT / "out", checkout, dirs_exist_ok=True)
        (checkout / ".nojekyll").touch()
        if pages.get("cname"):
            (checkout / "CNAME").write_text(pages["cname"] + "\n", encoding="utf-8")
        run(["git", "add", "--all"], cwd=checkout)
        if existing and not output(["git", "diff", "--cached", "--name-only"], cwd=checkout):
            print(f"No publication changes: {pages['html_url']}")
            return
        run(["git", "commit", "-m", f"Deploy portfolio from {source}"], cwd=checkout)
        run(git + ["push", "origin", "HEAD:refs/heads/gh-pages"], cwd=checkout)

    print(f"Published files: {pages['html_url']}")
    print("GitHub Pages is processing the update. Check its deployment status before sharing.")


if __name__ == "__main__":
    main()
