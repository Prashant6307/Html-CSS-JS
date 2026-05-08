<<<<<<< HEAD
const hambugerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector(".nav");
const close = document.querySelector(".close-icon");

hambugerMenu.addEventListener("click", () => {
    nav.classList.add("active");
});

close.addEventListener("click", () => {
    nav.classList.remove("active");
=======
const hambugerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector(".nav");
const close = document.querySelector(".close-icon");

hambugerMenu.addEventListener("click", () => {
    nav.classList.add("active");
});

close.addEventListener("click", () => {
    nav.classList.remove("active");
>>>>>>> 11bf0d10016f64a542f0abd3af8adcc1e03a16f8
});