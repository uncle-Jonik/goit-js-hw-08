import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInputListener);

function onInputListener(evt) {
  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;
  const data = {
    email,
    message,
  };
  console.log(data);
}

// console.dir(form);
// console.log(form.children[0]);
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// const localStorageKey = 'feedback-form-state';

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

// throttle(function () {
//   form.addEventListener(
//     'input',
//     evt => {
//       localStorage.setItem(localStorageKey, evt.target.value);
//     },
//     500
//   );
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
