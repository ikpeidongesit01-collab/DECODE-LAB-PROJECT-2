// Scroll-triggered reveal animation
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Simple form feedback (no actual submission)
function handleSubmit() {
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg     = document.getElementById('form-msg');

  if (!name || !email || !message) {
    msg.textContent = ' Please fill in all fields.';
    msg.className = 'text-center text-sm text-red-500 font-medium';
    msg.classList.remove('hidden');
    return;
  }
  msg.textContent = ' Message sent! I\'ll get back to you soon.';
  msg.className = 'text-center text-sm text-green-600 font-medium';
  msg.classList.remove('hidden');
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}