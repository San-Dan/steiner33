///// HAMBURHGER MENU
const hamburger = document.querySelector(".ham");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    navbar.classList.toggle("nav-change");
});
