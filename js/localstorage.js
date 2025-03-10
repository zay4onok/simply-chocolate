import { save, load } from './localstorage-helper.js';

const refs = {
  formEl: document.querySelector('.js-pop-up__form'),
};

function loadFromLocalStorage() {
  const userData = load('userData') || {};

  for (const key of Object.keys(userData)) {
    refs.formEl.elements[key].value = userData[key];
  }
}

loadFromLocalStorage();

function onFormElChange() {
  const userData = {};
  const data = new FormData(refs.formEl);

  data.forEach((value, key) => {
    userData[key] = value;
  });

  save('userData', userData);
}

function onFormElSubmit(event) {
  console.log(load('userData'));

  localStorage.removeItem('userData');
  event.target.reset();
}

refs.formEl.addEventListener('input', onFormElChange);
refs.formEl.addEventListener('submit', onFormElSubmit);
