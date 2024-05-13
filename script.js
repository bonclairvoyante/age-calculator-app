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

let isValid;

inputDay.addEventListener('input', (e) => {
  if (+inputDay.value > 31) {
    isValid = false;
    errorDay.textContent = 'Must be a valid day';
    return;
  } else {
    isValid = true;
    errorDay.textContent = '';
  }
  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = 'Must be a valid day';
    return;
  } else {
    errorDay.textContent = '';
  }
});

inputMonth.addEventListener('input', (e) => {
  if (+inputMonth.value > 12) {
    isValid = false;
    errorMonth.textContent = 'Must be a valid month';
    return;
  } else {
    isValid = true;
    errorMonth.textContent = '';
  }
  if (+inputMonth.value === 0) {
    isValid = false;
    errorMonth.textContent = 'Must be a valid month';
    return;
  } else {
    errorMonth.textContent = '';
  }
});

inputYear.addEventListener('input', (e) => {
  const currentYear = new Date();
  if (+inputYear.value > currentYear.getFullYear()) {
    isValid = false;
    errorYear.textContent = 'Must be in the past';
    return;
  } else {
    isValid = true;
    errorYear.textContent = '';
  }
  if (+inputYear.value === 0) {
    isValid = false;
    errorYear.textContent = 'Must be a valid year';
    return;
  } else {
    errorYear.textContent = '';
  }
});

submit.addEventListener('click', calcAge);

function calcAge() {
  if (isValid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYear = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;

    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYear;
  } else {
    // alert('error');
  }
}
