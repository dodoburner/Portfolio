const form = document.getElementById('form');
const buttonWrapper = document.getElementById('button-wrapper');
const emailValue = document.getElementById('email');
const nameValue = document.getElementById('name');
const messageValue = document.getElementById('message')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailValue.value !== emailValue.value.toLowerCase()) {
    if (!document.querySelector('.error-message')) {
      const errorMessage = document.createElement('p');
      errorMessage.innerText = 'Please submit your email in lowercase letters!';
      buttonWrapper.appendChild(errorMessage);
      errorMessage.classList.add('error-message');
    }
  } else {
    form.submit();
  }
});


