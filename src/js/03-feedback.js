import throttle from 'lodash.throttle';

const textarea = document.querySelector('textarea');
const input = document.querySelector('input');
const submitBtn = document.querySelector('button');
const feedback = document.querySelector('feedback-form');

const feedbackFormState = 'feedback-form-state';

feedback.addEventListener('input', throttle(saveData, 500))

const currentForm = window.localStorage.getItem(feedbackFormState);

function saveData() {
    const data = {
    email: input.value,
    message: textarea.value,
  };
    window.localStorage.setItem(feedbackFormState, JSON.stringify(data));
}

if (localStorage.length !== 0) {
    input.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    textarea.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
}


feedback.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;

    if (email.value === '' || message.value === '') {
        return error ('Proszę uzupełnić wszystkie pola!');
    } else {
        const finish = { email: email.value, message: message.value };
        console.log(finish)
        event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
    }
});