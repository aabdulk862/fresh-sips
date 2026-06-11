document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('open');
});
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('nav ul').classList.remove('open'));
});

const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => { lbImg.src = img.src; lightbox.classList.add('active'); });
});
lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
console.log('%c🛠️ Built by Adverse Solutions — adversesolutions.com', 'font-size:12px;color:#f5a623;');