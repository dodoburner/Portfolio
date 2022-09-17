const mobileMenu = document.getElementById('mobile-menu');
const hamburgerMenu = document.getElementById('hamburger-menu');
const menuClose = document.getElementById('menu-close');
const menuLinks = document.querySelectorAll('.menu-link');
const body = document.querySelector('body');
const header = document.querySelector('header');

const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener('change', () => {
  if (!mobileMenu.classList.contains('display-none')) {
    body.classList.toggle('not-scrollable');
    header.classList.toggle('display-none');
  }
});

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

const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY + 200;
  const workScroll = document.getElementById('work-section').offsetTop;
  const aboutScroll = document.getElementById('about-me-section').offsetTop;
  const formScroll = document.querySelector('footer').offsetTop;

  if (scrolled >= formScroll) {
    navLinks[0].classList.remove('highlight');
    navLinks[1].classList.remove('highlight');
    navLinks[2].classList.add('highlight');
  } else if (scrolled >= aboutScroll) {
    navLinks[0].classList.remove('highlight');
    navLinks[1].classList.add('highlight');
    navLinks[2].classList.remove('highlight');
  } else if (scrolled >= workScroll) {
    navLinks[0].classList.add('highlight');
    navLinks[1].classList.remove('highlight');
    navLinks[2].classList.remove('highlight');
  } else {
    navLinks[0].classList.remove('highlight');
    navLinks[1].classList.remove('highlight');
    navLinks[2].classList.remove('highlight');
  }
});

const resumeDropdowns = document.querySelectorAll('.knowledge-type-container');
const arrowImages = document.querySelectorAll('.arrow-img');
const resumeContents = document.querySelectorAll('.resume-list-content');

arrowImages.forEach((img, index) => img.addEventListener('click', () => {
  const resumeContent = resumeContents[index];
  resumeContent.classList.toggle('display-none');
  if (img.src.includes('right')) {
    img.src = 'images/icon-down.png'
  } else {
    img.src = 'images/icon-right.png'
  }
}))
