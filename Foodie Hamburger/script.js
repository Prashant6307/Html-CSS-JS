const hambugerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector(".nav");
const close = document.querySelector(".close-icon");

hambugerMenu.addEventListener("click", () => {
    nav.classList.add("active");
});

close.addEventListener("click", () => {
    nav.classList.remove("active");
});