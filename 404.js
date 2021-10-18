const interaction = document.querySelector('.interaction-404');
// 404 interaction
window.addEventListener('mousemove', (e) => {
    let top = e.pageY;
    let left = e.pageX;
    interaction.style.top = `${e.pageY}px`;
    interaction.style.left = `${e.pageX}px`;
});

/*
transform: translate3d(29.9706vw, -10.329vh, 0px) scale3d(1, 1, 1) rotateX(
0deg) rotateY(
0deg) rotateZ(
0deg) skew(
0deg, 
0deg);
    transform-style: preserve-3d;
*/