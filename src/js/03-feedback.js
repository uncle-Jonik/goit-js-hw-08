import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
//
//
const savedData = localStorage.getItem(localStorageKey);
const parsedData = JSON.parse(savedData);
//
//

function chekInputValue() {
  // перевірка чи заповненні поля email та message
  if (parsedData === null) {
    return;
  }
  form[0].value = parsedData.email;
  form[1].value = parsedData.message;
}
chekInputValue();
//
//
form.addEventListener('input', throttle(onInputListener, 500));
function onInputListener(evt) {
  // створення та запис данних до локального сховища
  const enteredData = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(enteredData));
  const savedSettings = localStorage.getItem(localStorageKey);
  const parsedSettings = JSON.parse(savedSettings);
  //   console.log(parsedSettings);
}
//
//
form.addEventListener('submit', onSubmitListener);
function onSubmitListener(evt) {
  //очистка сховища та даних в полях
  evt.preventDefault();
  console.log(parsedData);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
