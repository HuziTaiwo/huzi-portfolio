const heroCamera = document.querySelectorAll('.hero-camera');
const heroImages = document.querySelectorAll('.hero-image');
const heroImagesBottom = document.querySelectorAll('.hero-image .bottom');
const selectedEffect = document.querySelectorAll('.selected-project-effect');

const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

window.addEventListener('loadstart', () => {
    
})

// scroll animation

// const lastScrollTop = 0;
// addEventListener("scroll", () => { 
//    const st = window.pageYOffset;
//    if (st > lastScrollTop){
//       // downscroll code
//       heroImages.forEach(image => {
//           image.style.transform = 'translateX(-500px)';
//       })
//       console.log('down');
//    } else {
//       // upscroll code
//       console.log('up');
//    }
// //    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);

// var lastScroll = 0;

//   window.onscroll = function() {
//       let currentScroll =  document.body.scrollTop; // Get Current Scroll Value

//       if (currentScroll > 0 && lastScroll <= currentScroll){
//         lastScroll = currentScroll;
//         console.log('down');
//       }else{
//         lastScroll = currentScroll;
//         console.log('up');
//     }
//   };

const desktop = window.matchMedia("(min-width: 1000px)")

if(desktop.matches) {

    selectedEffect.forEach(effect => {
        const project = effect.parentElement;
        project.addEventListener('mouseenter', () => {
            effect.classList.add('glow');
        });
        project.addEventListener('mouseleave', () => {
            effect.classList.remove('glow');
        });
    })
};
