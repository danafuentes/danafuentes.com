/* ============================================================
   hero-slider.js — Rotating photo slideshow for hero panel
   - Auto-advances every 4 seconds
   - Prev / Next arrow buttons
   - Clickable dot indicators
   - Pauses on hover
   - Touch/swipe support for mobile
   To add photos: add more .hero-slide divs in index.html,
   each containing an <img> tag.
   ============================================================ */

(function () {
  const slider  = document.getElementById('hero-slider');
  const dotsEl  = document.getElementById('hero-dots');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  if (!slider || !dotsEl) return;

  const slides = [...slider.querySelectorAll('.hero-slide')];
  const total  = slides.length;
  if (total <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    return;
  }

  let current  = 0;
  let timer    = null;
  const DELAY  = 4000;

  /* ── Build dots ── */
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Photo ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function getDots() { return [...dotsEl.querySelectorAll('.hero-dot')]; }

  function goTo(index) {
    slides[current].classList.remove('active');
    getDots()[current].classList.remove('active');
    current = (index + total) % total;
    slides[current].classList.add('active');
    getDots()[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  /* ── Auto-advance ── */
  function startTimer() { timer = setInterval(next, DELAY); }
  function stopTimer()  { clearInterval(timer); }
  startTimer();

  /* ── Arrows ── */
  if (prevBtn) prevBtn.addEventListener('click', () => { stopTimer(); prev(); startTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopTimer(); next(); startTimer(); });

  /* ── Pause on hover ── */
  slider.addEventListener('mouseenter', stopTimer);
  slider.addEventListener('mouseleave', startTimer);

  /* ── Touch / swipe ── */
  let touchStartX = 0;
  slider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      stopTimer();
      diff > 0 ? next() : prev();
      startTimer();
    }
  }, { passive: true });

})();