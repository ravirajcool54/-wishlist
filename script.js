const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menu-btn');
const siteNav = document.getElementById('site-nav');

if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const sectionIds = ['services', 'work', 'skills', 'about', 'contact'];
const navLinks = [...document.querySelectorAll('.site-nav a')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.45 });

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

function handleSubmit(event) {
  event.preventDefault();
  const message = document.getElementById('form-message');
  if (message) {
    message.textContent = 'Thanks! Your inquiry was received. I will get back to you soon.';
  }
  event.target.reset();
  return false;
}

window.handleSubmit = handleSubmit;
