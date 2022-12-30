// Error messages
const lengthError = document.getElementById('length-error');
const letterError = document.getElementById('letter-error');
const numberError = document.getElementById('number-error');
const specialCharError = document.getElementById('special-char-error');

// const fname = document.getElementById('f-name').value;

const pwd = document.getElementById('password');
const pwdConfirm = document.getElementById('password-confirm');
const email = document.getElementById('email');

const noMatchError = document.getElementById('no-match-error');


const submitBtn = document.getElementById('submit-btn');




pwdConfirm.addEventListener('keyup', confirmPwd);
pwd.addEventListener('keyup', confirmPwd);

function confirmPwd() {
    if (pwd.value !== pwdConfirm.value) {
        noMatchError.innerHTML = '<span>*</span>Passwords do not match.';
        pwdConfirm.classList.add('error');
    } else {
        noMatchError.innerHTML = '';
        pwdConfirm.classList.remove('error');
    }
};