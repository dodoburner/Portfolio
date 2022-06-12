const mobileMenu = document.getElementById('mobile-menu');
const hamburgerMenu = document.getElementById('hamburger-menu');
const menuClose = document.getElementById('menu-close');
const menuLinks = document.querySelectorAll('.menu-links');
const body = document.querySelector('body');
const header = document.querySelector('header')

const toggleMobileMenu = (el) => {
  el.addEventListener('click', () => {
    mobileMenu.classList.toggle('display-none');
    body.classList.toggle('not-scrollable');
    header.classList.toggle('display-none');
  });
};

toggleMobileMenu(hamburgerMenu);
toggleMobileMenu(menuClose);

menuLinks.forEach((link) => {
  toggleMobileMenu(link);
});
