/* ============================================================
   reveal.js — Scroll-triggered fade-in for .reveal elements
   Elements are visible by default; JS hides then animates them
   only if IntersectionObserver is supported (progressive enhancement).
   ============================================================ */

(function () {
  if (!window.IntersectionObserver) return;

  document.body.classList.add('js-reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
