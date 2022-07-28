// TOGGLE MENU ICON | MOBILE VIEW
const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener ('click', function toggleMenu() {
  const nav = document.querySelector('.nav');

  nav.classList.toggle('active');
});