/* ============================================================
   nav.js — Sticky nav scroll effect + mobile hamburger menu
   ============================================================ */

(function () {
  const nav   = document.getElementById('main-nav');
  const burger = document.getElementById('burger');
  const mMenu  = document.getElementById('mobile-menu');

  // Shrink nav on scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburger toggle
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mmlink').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mMenu.classList.remove('open');
    });
  });
})();
