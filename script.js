const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; 
    my = e.clientY;
    dot.style.left = (mx - 2.5) + 'px';
    dot.style.top = (my - 2.5) + 'px';
});

function animateFlower() {
    fx += (mx - fx) * 0.1;
    fy += (my-fy) * 0.1;
    cursor.style.left = (fx - 16) + 'px';
    cursor.style.top = (fy - 16) + 'px';
    requestAnimationFrame(animateFlower);
}
animateFlower();


const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible');});
    }, {threshold: 0.1});
reveals.forEach(el => obs.observe(el));

document.getElementById('menu').addEventListener('click', () => {
    const links=document.querySelector('.links');
    if (links.style.display === 'flex') {
        links.style.display = '';
    } else {
        links.style.cssText = links.style.cssText = 'display:flex;flex-direction:column;position:fixed;inset:0;background:rgba(253,246,240,0.97);justify-content:center;align-items:center;gap:2.5rem;z-index:999;backdrop-filter:blur(20px);';
    }
});
