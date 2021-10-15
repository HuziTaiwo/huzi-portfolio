const heroCamera = document.querySelectorAll('.hero-camera');
const heroImages = document.querySelectorAll('.hero-image');
// const heroImagesBottom = document.querySelectorAll('.hero-image .bottom');

const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});
