(function () {
  "use strict";

  var toc = document.getElementById("toc");
  var list = document.getElementById("toc-list");
  if (!toc || !list) return;

  var article = document.querySelector(".prose");
  if (!article) { toc.classList.add("is-empty"); return; }

  var headings = Array.prototype.slice.call(article.querySelectorAll("h2[id], h3[id]"));
  if (!headings.length) { toc.classList.add("is-empty"); return; }

  headings.forEach(function (h) {
    var a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent;
    if (h.tagName === "H3") a.className = "toc-h3";
    list.appendChild(a);
  });

  // Scroll-spy: highlight the section currently in view.
  if (!("IntersectionObserver" in window)) return;

  var links = Array.prototype.slice.call(list.querySelectorAll("a"));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (l) { l.classList.remove("is-active"); });
      var active = byId[entry.target.id];
      if (active) active.classList.add("is-active");
    });
  }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

  headings.forEach(function (h) { observer.observe(h); });
})();
