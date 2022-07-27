const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener ('click', function toggleMenu() {
  const nav = document.getElementById('nav');

  if (nav.style.opacity === "0") {
    nav.style.opacity = "1";
  } else {
    nav.style.opacity = "0";
  }
});