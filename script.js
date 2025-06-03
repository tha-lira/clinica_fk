const menuIcon = document.getElementById('icon-menu');
const navbar = document.querySelector('.navigation-bar__menu');

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
