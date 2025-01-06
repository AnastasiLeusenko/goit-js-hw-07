'use strict';
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const formData = {};
  let isFormValid = true; 

  for (const element of loginForm.elements) {
    if (element.tagName === 'INPUT') {
      const trimmedValue = element.value.trim();
      formData[element.name] = trimmedValue;

      if (trimmedValue === "") {
        isFormValid = false; 
      }
    }
  }

  if (!isFormValid) {
    alert('All form fields must be filled in');
    return; 
  }

  console.log(formData);
  loginForm.reset(); 
});
