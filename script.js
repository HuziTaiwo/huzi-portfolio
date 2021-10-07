const heroCamera = document.querySelectorAll('.hero-camera');
const heroImages = document.querySelectorAll('.hero-image');
const heroImagesBottom = document.querySelectorAll('.hero-image .bottom');
const selectedEffect = document.querySelectorAll('.selected-project-effect');

const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// console.log(selectedEffect)

selectedEffect.forEach(effect => {
    const project = effect.parentElement;
    project.addEventListener('mouseenter', () => {
        effect.classList.add('glow');
    });
    project.addEventListener('mouseleave', () => {
        effect.classList.remove('glow');
    });
})
