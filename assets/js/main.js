(function () {
  "use strict";

  // Mobile navigation toggle
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Clipboard helper
  function markCopied(btn) {
    var original = btn.textContent;
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1500);
  }

  function copyText(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { markCopied(btn); });
      return;
    }
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      markCopied(btn);
    } catch (e) {}
    document.body.removeChild(ta);
  }

  // Add a header (language + copy button) to each code block.
  document.querySelectorAll("pre.highlight, .prose pre").forEach(function (pre) {
    if (pre.parentNode && pre.parentNode.classList.contains("code-block")) return;

    // Detect the language from kramdown's <div class="language-xxx highlighter-rouge">.
    var lang = "";
    var outer = pre.closest(".highlighter-rouge");
    if (outer) {
      var m = (outer.className || "").match(/language-([\w+-]+)/);
      if (m) lang = m[1] === "plaintext" ? "text" : m[1];
    }

    var wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    var header = document.createElement("div");
    header.className = "code-header";

    var langLabel = document.createElement("span");
    langLabel.className = "code-lang";
    langLabel.textContent = lang || "code";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-button";
    btn.textContent = "Copy";

    header.appendChild(langLabel);
    header.appendChild(btn);
    wrapper.insertBefore(header, pre);

    btn.addEventListener("click", function () {
      copyText(pre.innerText, btn);
    });
  });

  // Share "copy link" buttons
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      copyText(btn.getAttribute("data-copy"), btn);
    });
  });
})();
