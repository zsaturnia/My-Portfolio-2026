const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = 'translate(${mx - 3}px, ${my - 3}px)';
});

function animateFlower() {
    fx += (mx - fx) * 0.08;
    fy += (my-fy) * 0.08;
    cursor.style.transform = 'translate('
}