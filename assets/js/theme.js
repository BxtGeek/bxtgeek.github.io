(function () {
  "use strict";

  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}

    // Keep giscus in sync when it has loaded.
    var frame = document.querySelector("iframe.giscus-frame");
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage(
        { giscus: { setConfig: { theme: next === "dark" ? "dark" : "light" } } },
        "https://giscus.app"
      );
    }
  });
})();
