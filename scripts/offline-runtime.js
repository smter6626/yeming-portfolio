(() => {
  "use strict";

  const { pages, assets, defaultRoute } = JSON.parse(document.getElementById("offline-data").textContent);
  const view = document.getElementById("offline-view");
  const templates = new Map(Array.from(document.querySelectorAll("template[data-route]"), template => [template.dataset.route, template]));
  let activeRoute = defaultRoute;

  function readLocation() {
    const hash = window.location.hash.slice(1);
    const url = new URL(hash.startsWith("/") ? hash : defaultRoute, "https://offline.invalid");
    const path = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
    return { path: pages[path] ? path : defaultRoute, search: url.search, anchor: url.hash };
  }

  function loadImages() {
    view.querySelectorAll("[data-offline-image]").forEach(img => {
      img.src = assets[img.dataset.offlineImage];
    });
  }

  function scrollToSection(anchor) {
    if (!anchor) {
      window.scrollTo(0, 0);
      return;
    }
    let id;
    try { id = decodeURIComponent(anchor.slice(1)); } catch { return; }
    const section = document.getElementById(id);
    if (section && view.contains(section)) section.scrollIntoView();
  }

  function render(initial = false) {
    const route = readLocation();
    const changed = activeRoute !== route.path;
    if (changed) {
      view.replaceChildren(templates.get(route.path).content.cloneNode(true));
      activeRoute = route.path;
    }
    const page = pages[route.path];
    document.documentElement.lang = page.lang;
    document.title = page.title;
    document.querySelector('meta[name="description"]').content = page.description;
    loadImages();
    if (changed && !initial) {
      const main = view.querySelector("main");
      main.tabIndex = -1;
      main.focus({ preventScroll: true });
    }
    if (changed || initial || route.anchor) scrollToSection(route.anchor);
  }

  function navigate(destination) {
    const hash = `#${destination}`;
    if (window.location.hash === hash) render();
    else window.location.hash = hash;
  }

  function setFilter(button) {
    const group = button.closest("[data-work-filters]");
    group.querySelectorAll("[data-work-filter]").forEach(item => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    const rows = Array.from(view.querySelectorAll("[data-work-index] [data-project-id]"));
    rows.forEach(row => { row.hidden = button.dataset.workFilter !== "All" && row.dataset.projectCategory !== button.dataset.workFilter; });
    const count = rows.filter(row => !row.hidden).length;
    view.querySelector("[data-work-count]").textContent = pages[activeRoute].lang === "zh-Hans"
      ? `显示 ${count} 个作品，共 ${rows.length} 个` : `${count} of ${rows.length} works`;
  }

  function selectProject(button) {
    const id = button.dataset.project;
    const group = button.closest("[data-atlas-nodes]");
    const showcase = button.closest("[data-work-showcase]");
    const row = Array.from(view.querySelectorAll("[data-work-index] [data-project-id]")).find(item => item.dataset.projectId === id);
    group.querySelectorAll("[data-project]").forEach(node => {
      const selected = node === button;
      node.dataset.selected = String(selected);
      node.classList.toggle(group.dataset.selectedClass, selected);
      node.querySelector("[data-selection-label]").textContent = selected ? group.dataset.selectedLabel : group.dataset.exploreLabel;
    });
    const orbit = showcase.querySelector("[data-selection-orbit]");
    orbit.setAttribute("cx", button.dataset.x);
    orbit.setAttribute("cy", button.dataset.y);
    showcase.querySelectorAll("[data-connection-from]").forEach(connection => {
      connection.classList.toggle(connection.dataset.activeClass, connection.dataset.connectionFrom === id || connection.dataset.connectionTo === id);
    });
    const meta = showcase.querySelector("[data-preview-meta]");
    meta.textContent = row.dataset.previewLabel;
    meta.style.color = row.style.getPropertyValue("--project-color");
    showcase.querySelector("[data-preview-heading]").textContent = row.dataset.previewTitle;
    showcase.querySelector("[data-preview-summary]").textContent = row.querySelector("p").textContent;
    const link = showcase.querySelector("[data-preview-link]");
    link.setAttribute("href", row.getAttribute("href"));
    link.setAttribute("aria-label", (pages[activeRoute].lang === "zh-Hans" ? "了解" : "Explore ") + row.querySelector("h3").textContent);
  }

  view.addEventListener("click", event => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest("button");
    if (button?.closest(".language-switch")) {
      const route = readLocation();
      const base = route.path === "/zh/" ? "/" : route.path.startsWith("/zh/") ? route.path.slice(3) : route.path;
      const path = button.lang.startsWith("zh") ? `/zh${base}` : base;
      if (path !== route.path) navigate(path + route.search + route.anchor);
    } else if (button?.matches("[data-work-filter]")) {
      setFilter(button);
    } else if (button?.classList.contains("print-button")) {
      window.print();
    }

    const link = event.target.closest("a");
    const href = link?.getAttribute("href");
    if (href?.startsWith("#/") && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) {
      event.preventDefault();
      navigate(href.slice(1));
    }
  });

  ["focusin", "mouseover"].forEach(type => view.addEventListener(type, event => {
    if (!(event.target instanceof Element)) return;
    const node = event.target.closest("[data-atlas-nodes] [data-project]");
    if (node) selectProject(node);
  }));

  window.addEventListener("hashchange", () => render());
  if (!window.location.hash) window.history.replaceState(null, "", `#${defaultRoute}`);
  render(true);
})();
