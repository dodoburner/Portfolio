const popup = document.querySelector('.popup');
const iconCancel = document.querySelector('.icon-cancel');
const projectButton = document.querySelectorAll('.project-info .project-button');

function togglePopup(element) {
  element.addEventListener('click', (e) => {
    popup.classList.toggle('display-none');
    
  });
}

togglePopup(iconCancel);
projectButton.forEach(btn => {
  togglePopup(btn);
})
