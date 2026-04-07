/* ============================================================
   lightbox.js — Full-screen image lightbox for gallery items
   Usage: add onclick="openLightbox(this)" to .gallery-item divs
   ============================================================ */

(function () {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Expose globally so inline onclick works
  window.openLightbox = function (item) {
    const img = item.querySelector('img');
    if (!img) return; // no photo yet — placeholder only
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightbox.classList.add('open');
  };

  window.closeLightbox = function () {
    lightbox.classList.remove('open');
  };

  // Close on backdrop click
  lightbox.addEventListener('click', function (e) {
    if (e.target === this) window.closeLightbox();
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.closeLightbox();
  });
})();
