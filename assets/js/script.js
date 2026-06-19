// THEME TOGGLE
const toggle = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
let dark = true;
toggle.addEventListener('click', () => {
  dark = !dark;
  document.body.classList.toggle('light', !dark);
  icon.className = dark ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
});

// HAMBURGER
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('#nav-menu a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('open');
  });
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// CONTACT FORM
function sendMessage() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  // Campos vazios
  if (!name || !email || !message) {
    status.style.color = '#ff6584';
    status.textContent = 'Preencha todos os campos antes de enviar.';
    status.style.display = 'block';
    return;
  }

  // Nome mínimo de 6 caracteres
  if (name.length < 6) {
    status.style.color = '#ff6584';
    status.textContent = 'O nome deve ter pelo menos 6 caracteres.';
    status.style.display = 'block';
    return;
  }

  // E-mail válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.style.color = '#ff6584';
    status.textContent = 'Informe um e-mail válido (ex: nome@email.com).';
    status.style.display = 'block';
    return;
  }

  const mailto = `mailto:endryusmontezano2@hotmail.com?subject=Contato de ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nDe: ' + email)}`;
  window.location.href = mailto;
  status.style.color = '#43e97b';
  status.textContent = 'Abrindo seu cliente de e-mail...';
  status.style.display = 'block';
}

// ACTIVE NAV
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});