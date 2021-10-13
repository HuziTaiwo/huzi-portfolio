const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
})