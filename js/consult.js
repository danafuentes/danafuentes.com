/* ============================================================
   consult.js — Booking form via Formspree
   - Category pills toggle selection
   - On submit: writes selected categories into the hidden
     "interested_in" field and updates the email subject,
     then lets the native form POST to Formspree handle delivery.
   - Shows an inline success message on redirect-less submission
     using fetch() (AJAX mode), so the page doesn't navigate away.
   ============================================================ */

(function () {

  /* ── Category pill toggle ── */
  document.querySelectorAll('.fcat').forEach(pill => {
    pill.addEventListener('click', () => pill.classList.toggle('selected'));
  });

  /* ── Form submission via fetch (no page redirect) ── */
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const selected = [...document.querySelectorAll('.fcat.selected')]
      .map(b => b.dataset.val);

    // Write selected categories into the hidden field
    const interestField = document.getElementById('interested-in-field');
    if (interestField) {
      interestField.value = selected.length ? selected.join(', ') : 'Not specified';
    }

    // Update subject line with selected categories
    const subjectField = document.getElementById('form-subject');
    if (subjectField) {
      subjectField.value = selected.length
        ? 'Booking Enquiry — ' + selected.join(', ')
        : 'Booking Enquiry';
    }

    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success');

    // Show loading state
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtn) submitBtn.textContent = 'Sending…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Success
        form.reset();
        document.querySelectorAll('.fcat').forEach(p => p.classList.remove('selected'));
        if (submitBtn) submitBtn.style.display = 'none';
        if (successMsg) successMsg.classList.add('visible');
      } else {
        // Formspree returned an error
        const data = await response.json().catch(() => ({}));
        const msg = data?.errors?.map(err => err.message).join(', ')
          || 'Something went wrong. Please email danafh4@gmail.com directly.';
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtn) submitBtn.textContent = 'Try again';
        alert(msg);
      }
    } catch (err) {
      // Network error
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtn) submitBtn.textContent = 'Try again';
      alert('Could not send — please email danafh4@gmail.com directly.');
    }
  });

})();