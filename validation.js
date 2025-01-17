const signUpForm = document.getElementById(`form1`); // get signup form
const logInForm = document.getElementById(`form2`); // get login form
const _wrapper = document.querySelector(`.wrapper`); // get wrapper div
const _displayTag = document.querySelector(`#welcome > span`); // get user span tag
const signUpPasswordInput = document.querySelector(`#signup-password-input`); // get signup password input
const confirmPasswordInput = document.querySelector(`#confirm-password-input`); // confirm password input
const loginPasswordInput = document.querySelector(`#login-password-input`); // get login password input
const loginEmailInput = document.getElementById(`login-email-input`); // get login email input

let userInfo = [
    document.getElementById(`firstname-input`).value,
    document.getElementById(`lastname-input`).value,
    document.getElementById(`signup-email-input`).value
];
console.log(userInfo[0]);

signUpForm.addEventListener(`submit`, event => {
    event.preventDefault(); // prevent form submition

    let fields$reqiured = [];
    const confirm$Password = confirmPasswordInput.value;
    const signUpPassword = signUpPasswordInput.value;
    comparePasswordsForErrors(signUpPassword, confirm$Password); // function for comparing inputed passwords
    const combined$fields = fields$reqiured.push(comparePasswordsForErrors(signUpPassword, confirm$Password)).join(`, `);
    const _errors = document.createElement(`h6`).textContent(combined$fields);
    _wrapper.insertBefore(_errors, _wrapper.children[1]);
})

logInForm.addEventListener(`submit`, event => {
    event.preventDefault(); // prevent form submition

    let fields$reqiured = [];
    const login_email = loginEmailInput.value;
    const login_password = loginPasswordInput.value;
    validateLogin(login_password, login_email); // function for password and email input validation
    const combined$fields = fields$reqiured.push(validateLogin(login_password, login_email)).join(`, `);
    const _errors = document.createElement(`h6`).textContent(combined$fields);
    _wrapper.insertBefore(_errors, _wrapper.children[1]);
})




function validateLogin(inputedPassword, inputedEmail) {
    let error;
    if (userInfo.includes(inputedEmail) && userInfo.includes(inputedPassword)) {
        window.location.href(`dashboard.html`);
        _displayTag.innerText = `${userInfo[0]} ${userInfo[1]}`;
    } else {
        error = `Login details is incorrect!`;
        inputedPassword.parentElement.classList.add(`incorrect`);
        inputedEmail.parentElement.classList.add(`incorrect`);
    }
    return error;
}

function comparePasswordsForErrors(password, confirm_password) {
    let error;
    if (confirm_password !== password) {
        error = `Passwords do not match!`;
        confirm_password.parentElement.classList.add(`incorrect`);
        password.parentElement.classList.add(`incorrect`);
    } else {
        userInfo[3] = password;
    }
    return error;
}

function clear_errorMessage() {
    if (confirmPasswordInput.parentElement.classList.contains(`incorrect`)) {
        confirmPasswordInput.parentElement.classList.remove(`incorrect`);
        document.querySelector(`h6`).textContent = ``;
    }
    if (signUpPasswordInput.parentElement.classList.contains(`incorrect`)) {
        signUpPasswordInput.parentElement.classList.remove(`incorrect`);
        document.querySelector(`h6`).textContent = ``;
    }
    if (loginPasswordInput.parentElement.classList.contains(`incorrect`)) {
        loginPasswordInput.parentElement.classList.remove(`incorrect`);
        document.querySelector(`h6`).textContent = ``;
    }
    if (loginEmailInput.parentElement.classList.contains(`incorrect`)) {
        loginEmailInput.parentElement.classList.remove(`incorrect`);
        document.querySelector(`h6`).textContent = ``;
    }
}
