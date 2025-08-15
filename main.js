// Mobile menu + language toggle + year
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', ()=>{
  const visible = getComputedStyle(nav).display !== 'none';
  nav.style.display = visible ? 'none' : 'flex';
});

// Language toggle
const toggle = document.getElementById('langToggle');
toggle?.addEventListener('click', ()=>{
  const html = document.documentElement;
  const current = html.getAttribute('data-lang') || 'en';
  const next = current === 'en' ? 'es' : 'en';
  html.setAttribute('data-lang', next);
  toggle.textContent = next === 'en' ? 'ES' : 'EN';
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
