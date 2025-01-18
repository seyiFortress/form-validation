const _wrapper = document.querySelector(`.wrapper`); // get wrapper div
const _displayTag = document.querySelector(`#welcome > span`); // get user span tag

let userInfo = [];
console.log();

function signUpForm (event) {
    event.preventDefault(); // prevent form submition
    
    console.log(userInfo)

    const getFirstName = document.getElementById(`firstname-input`).value; // signup first-name input value
    userInfo.push(getFirstName);
    const getLastName = document.getElementById(`lastname-input`).value; // signup last-name input value
    userInfo.push(getLastName);
    const getEmail = document.getElementById(`signup-email-input`).value; // signup email input value
    userInfo.push(getEmail);

    const signUpPasswordInput = document.querySelector(`#signup-password-input`); // signup passwword input element
    const signUpPassword = signUpPasswordInput.value; // signup password value
    const confirmPasswordInput = document.querySelector(`#confirm-password-input`); // signup confirm-password input element
    const confirmPassword = confirmPasswordInput.value; // signup confirm-password input value
    
    const error = comparePasswordsForErrors(signUpPassword, confirmPassword);
    if (error) {
        const _errorsElement = document.createElement(`h6`);
        _errorsElement[`textContent`] = error;
        _errorsElement[`classList`] = `incorrect`;
        _wrapper.insertBefore(_errorsElement, _wrapper.children[1]);
        console.log(_errorsElement);
    } else {
        window.location[`href`] = `index.html`;
    }

    console.log();


    function comparePasswordsForErrors(password, confirm_password) {
        let error;
        if (confirm_password !== password) {
            error = `Passwords do not match!`;
            confirmPasswordInput.parentElement.classList.add(`incorrect`);
            signUpPasswordInput.parentElement.classList.add(`incorrect`);
        } else {
            userInfo.push(password);
        }
        return error;
    }

    
}

function logInForm(event) {
    event.preventDefault(); // prevent form submition
    
    console.log(userInfo)

    const loginPasswordInput = document.querySelector(`#login-password-input`); // login password input element
    const loginPassword = loginPasswordInput.value // login password input value
    const loginEmailInput = document.getElementById(`login-email-input`); // login email input element
    const loginEmail = loginEmailInput.value // login email input value

    const error = validateLogin(loginPassword, loginEmail);

    function validateLogin(inputedPassword, inputedEmail) {
        let error = [];
        if (userInfo.includes(inputedEmail) && userInfo.includes(inputedPassword)) {
            window.location[`href`] = `dashboard.html`;
            _displayTag[`innerText`] = `${userInfo[0]} ${userInfo[1]}`;
        } else if (inputedEmail !== userInfo[2]) {
            error.push(`Login Email is incorrect!`);
            loginEmailInput.parentElement.classList.add(`incorrect`);
        } else if (inputedPassword !==)
        return error;
    }
}

function clear_errorMessage() {
    if (document.querySelector(`#signup-password-input`).parentElement.classList.contains(`incorrect`) || document.querySelector(`#confirm-password-input`).parentElement.classList.contains(`incorrect`)) {
        document.querySelector(`#signup-password-input`).parentElement.classList.remove(`incorrect`);
        document.querySelector(`#confirm-password-input`).parentElement.classList.remove(`incorrect`);
        document.querySelector(`h6`).textContent = ``;
    }
}





// function logInForm(event){
//     event.preventDefault(); // prevent form submition

//     let fields$reqiured = [];
//     const login_email = loginEmailInput;
//     const login_password = loginPasswordInput;
//     validateLogin(login_password, login_email); // function for password and email input validation
//     const combined$fields = fields$reqiured.push(validateLogin(login_password, login_email)).join(`, `);
//     const _errors = document.createElement(`h6`).textContent(combined$fields);
//     _wrapper.insertBefore(_errors, _wrapper.children[1]);
// }




// function validateLogin(inputedPassword, inputedEmail) {
//     let error;
//     if (userInfo.includes(inputedEmail) && userInfo.includes(inputedPassword)) {
//         window.location.href(`dashboard.html`);
//         _displayTag.innerText = `${userInfo[0]} ${userInfo[1]}`;
//     } else {
//         error = `Login details is incorrect!`;
//         inputedPassword.parentElement.classList.add(`incorrect`);
//         inputedEmail.parentElement.classList.add(`incorrect`);
//     }
//     return error;
// }



// function clear_errorMessage() {
//     if (confirmPasswordInput.parentElement.classList.contains(`incorrect`)) {
//         confirmPasswordInput.parentElement.classList.remove(`incorrect`);
//         document.querySelector(`h6`).textContent = ``;
//     }
//     if (signUpPasswordInput.parentElement.classList.contains(`incorrect`)) {
//         signUpPasswordInput.parentElement.classList.remove(`incorrect`);
//         document.querySelector(`h6`).textContent = ``;
//     }
//     if (loginPasswordInput.parentElement.classList.contains(`incorrect`)) {
//         loginPasswordInput.parentElement.classList.remove(`incorrect`);
//         document.querySelector(`h6`).textContent = ``;
//     }
//     if (loginEmailInput.parentElement.classList.contains(`incorrect`)) {
//         loginEmailInput.parentElement.classList.remove(`incorrect`);
//         document.querySelector(`h6`).textContent = ``;
//     }
// }
