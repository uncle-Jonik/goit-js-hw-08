import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
//
//
function chekInputValue(key) {
  // перевірка чи заповненні поля email та message
  const savedData = localStorage.getItem(key);
  const parsedData = JSON.parse(savedData);
  if (parsedData === null) {
    return;
  }
  form[0].value = parsedData.email;
  form[1].value = parsedData.message;
}
chekInputValue(localStorageKey);
//
//
form.addEventListener('input', throttle(onInputListener, 500));
function onInputListener(evt) {
  // створення та запис данних до локального сховища
  const enteredData = {
    email: evt.currentTarget[0].value,
    message: evt.currentTarget[1].value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(enteredData));
  const savedSettings = localStorage.getItem(localStorageKey);
  const parsedSettings = JSON.parse(savedSettings);
  console.log(parsedSettings);
}
//
//
form.addEventListener('submit', onSubmitListener);
function onSubmitListener(evt) {
  //очистка сховища та даних в полях
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
}
