document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("dark-toggle");

  // Load saved theme
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    toggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    toggleBtn.innerHTML = isLight ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});

const canvas = document.createElement('canvas');
canvas.id = 'hero-particles';
document.querySelector('.hero').appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let particles = [];
for (let i=0; i<100; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*3 + 1,
    speedX: (Math.random()-0.5)*1,
    speedY: (Math.random()-0.5)*1
  });
}

function animateParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle = 'rgba(100,255,218,0.6)';
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
