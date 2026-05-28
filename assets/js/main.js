// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.navbar nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
