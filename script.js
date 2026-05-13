(function () {
  var root = document.querySelector("[data-accordion]");
  if (!root) return;

  var items = root.querySelectorAll(".accordion-item");
  var plusSrc = "./assets/images/icon-plus.svg";
  var minusSrc = "./assets/images/icon-minus.svg";

  function setOpen(item, open) {
    var trigger = item.querySelector(".accordion-trigger");
    var panel = item.querySelector(".accordion-panel");
    var icon = item.querySelector(".accordion-icon");
    if (!trigger || !panel || !icon) return;

    item.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    icon.src = open ? minusSrc : plusSrc;
  }

  function closeOthers(except) {
    items.forEach(function (item) {
      if (item !== except) setOpen(item, false);
    });
  }

  items.forEach(function (item) {
    var trigger = item.querySelector(".accordion-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function () {
      var willOpen = !item.classList.contains("is-open");
      closeOthers(item);
      setOpen(item, willOpen);
    });
  });
})();
