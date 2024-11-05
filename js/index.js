window.addEventListener("load", function () {
  let menuButton = document.getElementById("menu-button");
  let menu = document.getElementById("menu");
  let body = document.body;

  body.addEventListener("click", () => {
    menu.classList.add("hidden");
    body.style.overflow = "auto";
    body.classList.remove("blur-sm");
  });

  menuButton.addEventListener("click", (event) => {
    menu.classList.remove("hidden");
    body.classList.add("blur-sm");
    body.style.overflow = "hidden";
    event.stopPropagation();
  });
});
