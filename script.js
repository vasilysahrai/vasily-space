/* ═══════════════════════════════════════════
   Vasily Sahrai — Portfolio
   Interaction layer
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Hero entrance animation ── */
  function revealHero() {
    const label = document.getElementById('hero-label');
    const descriptor = document.getElementById('hero-descriptor');
    const lines = document.querySelectorAll('.hero-name .line-inner');

    // Stagger the line reveals
    lines.forEach(line => {
      line.classList.add('revealed');
    });

    if (label) label.classList.add('revealed');
    if (descriptor) descriptor.classList.add('revealed');
  }

  // Trigger hero reveal after fonts have a moment to load
  if (document.readyState === 'complete') {
    setTimeout(revealHero, 100);
  } else {
    window.addEventListener('load', () => setTimeout(revealHero, 100));
  }

  /* ── Navbar scroll state ── */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function handleScroll() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ── Scroll reveal ── */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ── Smooth scroll for nav links ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Footer year ── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
