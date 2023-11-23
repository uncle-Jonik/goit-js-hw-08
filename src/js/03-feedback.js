import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
//
//
function chekInputValue() {
  // перевірка чи заповненні поля email та message
  const savedData = localStorage.getItem(localStorageKey);
  const parsedData = JSON.parse(savedData);
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

  // тут мені допоміг ментор, але я не розумію чим це відрізняється від evt.currentTarget[0].value,
  /*
   * допоможіть пофіксити помилку.Вона постійно виникає коли throttle(func, 500).
   * Якщо прибрати throttle, або поставити на значення 0 все працює чудово.
   * Я намагався гуглити проблему і якось розібратися, але не вдалося.
   * Рекомендувалося використати debounce, але це не по умові задачі.
   *
   * Дана помилка відбувається коли я швидко ввожу данні, якщо це робити повільно працює все нормально.
   *
   */
  const enteredData = {
    email: form.email.value,
    message: form.message.value.trim(),
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
  const savedData = localStorage.getItem(localStorageKey);
  const parsedData = JSON.parse(savedData);

  // перевірка данних перед сабмітом

  // хотів зробити через функцію, але не вийшло. Так наче працює)
  if (parsedData === null) {
    return alert('All fields must be filled!');
  }
  if (parsedData.email === '' || parsedData.message === '') {
    return alert('All fields must be filled!');
  }
  console.log(parsedData);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
