'use strict';

const inputYear = document.querySelector('.input-year');
const inputMonth = document.querySelector('.input-month');
const inputDay = document.querySelector('.input-day');

const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');

const input = document.getElementsByName('input');
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
const submit = document.querySelector('.submit-btn');

inputDay.addEventListener('input', (e) => {
  if (+inputDay.value > 31) {
    errorDay.textContent = 'Must be a valid day';
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textConent = '';
  }
  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = 'This field is required';
    isValid = false;
    return;
  }else{
    errorDay.textContent = '';
  }
});
