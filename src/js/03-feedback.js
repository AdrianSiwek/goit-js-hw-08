// import throttle from 'lodash.throttle';

// const textarea = document.querySelector('textarea');
// const input = document.querySelector('input');
// const submitBtn = document.querySelector('button');
// const feedback = document.querySelector('feedback-form');

// const feedbackFormState = 'feedback-form-state';

// feedback.addEventListener('input', throttle(saveData, 500))

// const currentForm = window.localStorage.getItem(feedbackFormState);

// function saveData() {
//     const data = {
//     email: input.value,
//     message: textarea.value,
//   };
//     window.localStorage.setItem(feedbackFormState, data);
// }

// if (localStorage.length !== 0) {
//     input.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
//     textarea.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
// }


// feedback.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { email, message }
//   } = event.currentTarget;

//     if (email.value === '' || message.value === '') {
//         return error ('Proszę uzupełnić wszystkie pola!');
//     } else {
//         const finish = { email: email.value, message: message.value };
//         console.log(finish)
//         event.currentTarget.reset();
//         localStorage.removeItem('feedback-form-state');
//     }
// });


import throttle from "lodash.throttle";

const feedbackFormState = "feedback-form-state";
const email = document.querySelector("input[name=email]");
const message = document.querySelector("textarea[name=message]");

const form = document.querySelector('form');

const onSumbit = (event) => {
    event.preventDefault();
    localStorage.removeItem(feedbackFormState);
    console.log({
        email: form.elements.email.value,
        message: form.elements.message.value
    });
    form.reset();
}

form.addEventListener('submit', onSumbit);

const localStorage = window.localStorage;


const onHandleInput = (event) => {
    localStorage.setItem(feedbackFormState, JSON.stringify({
        email: form.elements.email.value,
        message: form.elements.message.value
    }))
}

const setValues = () => {
    const formState = localStorage.getItem(feedbackFormState);
    const dataFormState = JSON.parse(formState);
    email.value = dataFormState.email;
    message.value = dataFormState.message;
}

form.addEventListener('input', throttle(onHandleInput, 500));

setValues();