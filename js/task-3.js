'use strict';
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim(); // Очищаємо пробіли по краях

  if (inputValue === "") { // Перевіряємо, чи інпут порожній або містить лише пробіли
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue; // Підставляємо значення інпута в span
  }
});