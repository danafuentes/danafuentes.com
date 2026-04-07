/* ============================================================
   portfolio.js — Portfolio category tab switching
   ============================================================ */

(function () {
  const tabs   = document.querySelectorAll('.ptab');
  const panels = document.querySelectorAll('.portfolio-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`[data-panel="${tab.dataset.cat}"]`).classList.add('active');
    });
  });
})();
