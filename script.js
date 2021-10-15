const heroCamera = document.querySelectorAll('.hero-camera');
const heroImages = document.querySelectorAll('.hero-image');
// const heroImagesBottom = document.querySelectorAll('.hero-image .bottom');

addEventListener('scroll', () => {
    heroImages.forEach(image => {
        image.style.animation = 'moveleft ease';
        // const top =  heroCamera.boundingClientRect().top;
        console.log(top);
    });
});

const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});
