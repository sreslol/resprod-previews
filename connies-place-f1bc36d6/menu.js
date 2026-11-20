(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (!header || !toggle || !menu) return;

  var desktop = window.matchMedia("(min-width: 960px)");

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function setOpen(open) {
    if (desktop.matches) open = false;
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) {
      menu.removeAttribute("hidden");
    } else {
      menu.setAttribute("hidden", "");
    }
  }

  function close() {
    if (isOpen()) setOpen(false);
  }

  toggle.addEventListener("click", function () {
    setOpen(!isOpen());
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) close();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!isOpen()) return;
    if (toggle.contains(event.target) || menu.contains(event.target)) return;
    close();
  });

  function onBreakpointChange(event) {
    if (event.matches) close();
  }

  if (desktop.addEventListener) desktop.addEventListener("change", onBreakpointChange);
  else desktop.addListener(onBreakpointChange);
})();
