(function () {
  "use strict";

  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  if (!input || !results) return;

  var pagefind = null;

  function init() {
    window.Pagefind.init({ baseUrl: "/pagefind/" }).then(function (pf) {
      pagefind = pf;
      if (input.value.trim()) runSearch(input.value.trim());
    });
  }

  function loadPagefind() {
    if (window.Pagefind) { init(); return; }
    var s = document.createElement("script");
    s.src = "/pagefind/pagefind.js";
    s.onload = init;
    document.head.appendChild(s);
  }

  function runSearch(term) {
    if (!pagefind) return;
    pagefind.search(term).then(function (res) {
      results.innerHTML = "";

      if (!res || !res.results.length) {
        status.textContent = 'No results for "' + term + '".';
        return;
      }

      status.textContent = res.results.length + " result" + (res.results.length === 1 ? "" : "s");

      res.results.slice(0, 20).forEach(function (r) {
        r.data().then(function (d) {
          var item = document.createElement("div");
          item.className = "search-result";

          var a = document.createElement("a");
          a.href = d.url;
          a.textContent = (d.meta && d.meta.title) || d.url;
          item.appendChild(a);

          if (d.excerpt) {
            var p = document.createElement("p");
            p.innerHTML = d.excerpt;
            item.appendChild(p);
          }

          results.appendChild(item);
        });
      });
    });
  }

  var debounce;
  input.addEventListener("input", function () {
    clearTimeout(debounce);
    var term = input.value.trim();
    if (!term) {
      results.innerHTML = "";
      status.textContent = "Type to start searching.";
      return;
    }
    debounce = setTimeout(function () { runSearch(term); }, 200);
  });

  loadPagefind();
})();
