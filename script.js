/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Typing roles animation ── */
const roles = [
  'Full-Stack Developer',
  'Python Engineer',
  'UI/UX Enthusiast',
  'Open-Source Builder',
  'Problem Solver',
];
let roleIdx = 0, charIdx = 0, deleting = false;
const roleDisplay = document.getElementById('role-display');

function typeRole() {
  const current = roles[roleIdx];
  if (!deleting) {
    roleDisplay.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeRole, 1800);
      return;
    }
  } else {
    roleDisplay.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeRole, deleting ? 45 : 80);
}
typeRole();

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

/* ── Counter animation ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  let start = 0;
  const step = Math.ceil(target / 40);
  const interval = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start + (target >= 10 ? '+' : '');
    if (start >= target) clearInterval(interval);
  }, 40);
}
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(animateCounter);
      statObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.about-stats').forEach(el => statObs.observe(el));

/* ── Particle canvas ── */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(true); }
  reset(init = false) {
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : H + 10;
    this.r = Math.random() * 1.5 + 0.3;
    this.speed = Math.random() * 0.4 + 0.1;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.drift = (Math.random() - 0.5) * 0.3;
  }
  update() {
    this.y -= this.speed;
    this.x += this.drift;
    if (this.y < -10) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(108,99,255,${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < 90; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

/* ── Smooth active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent2)' : '';
  });
});
