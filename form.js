const form = document.getElementById('form');
const buttonWrapper = document.getElementById('button-wrapper');
const emailValue = document.getElementById('email');
const nameValue = document.getElementById('name');
const messageValue = document.getElementById('message');

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

let localData = JSON.parse(localStorage.getItem('userInput'));
let formInput = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  message: document.getElementById('message').value,
};

const isInputChange = (input) => {
  input.addEventListener('change', (e) => {
    formInput = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
    formInput[input.name] = e.target.value;
    localStorage.setItem('userInput', JSON.stringify(formInput));
    localData = JSON.parse(localStorage.getItem('userInput'));
  });
};

nameValue.value = localData.name;
emailValue.value = localData.email;
messageValue.value = localData.message;
isInputChange(nameValue);
isInputChange(emailValue);
isInputChange(messageValue);
