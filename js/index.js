window.addEventListener("load", function () {
  let menuButton = document.getElementById("menu-button");
  let menu = document.getElementById("menu");
  let body = document.body;

  body.addEventListener("click", () => {
    menu.classList.add("hidden");
    body.style.overflow = "auto";
  });

  menuButton.addEventListener("click", (event) => {
    menu.classList.remove("hidden");
    body.style.overflow = "hidden";
    event.stopPropagation();
  });
});
