const burgerMenu = document.querySelector(".burger-menu");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

function closeMenu(event) {
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.getElementById("menu");

  if (
    !menu.contains(event.target) &&
    !burgerMenu.contains(event.target) &&
    menu.classList.contains("active")
  ) {
    menu.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
}

window.addEventListener("click", closeMenu);
window.addEventListener("touchstart", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burgerMenu.classList.remove("active");
  });
});