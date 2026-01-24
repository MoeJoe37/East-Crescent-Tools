// Basic interaction and a small initialization
document.addEventListener('DOMContentLoaded', () => {
  // Fill year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Button handler
  const btn = document.getElementById('actionBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      // Example action: temporary notification element
      const msg = document.createElement('div');
      msg.textContent = 'Button clicked';
      msg.style.position = 'fixed';
      msg.style.left = '50%';
      msg.style.top = '20px';
      msg.style.transform = 'translateX(-50%)';
      msg.style.padding = '8px 12px';
      msg.style.borderRadius = '8px';
      msg.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
      msg.style.background = '#fff';
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 1500);
    });
  }
});
