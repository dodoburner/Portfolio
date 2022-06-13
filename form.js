const form = document.querySelector('form');
const buttonWrapper =  document.getElementById('button-wrapper');
const emailValue = form.elements['email'].value;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailValue !== emailValue.toLowerCase()) {
   const errorMessage = document.createElement('p');
   errorMessage.innerText = 'Please submit your email in lowercase letters!'
  } 
  else {
    form.submit()
  }
})