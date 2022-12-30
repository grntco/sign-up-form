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

// submitBtn.addEventListener('click', function() {

//     matchPassword()


// });

// function matchPassword(str1, str2) {
//     const noMatchError = document.getElementById('no-match-error');
//     if (str2.hasFocus()) {
//         if (str1 === str2) {
//             console.log(true);
//             return true;
//         }
//     } else {
//         console.log(false);
//         return false;
// }
// }

pwdConfirm.addEventListener('keyup', function() {
    if (pwd.value !== pwdConfirm.value) {
        noMatchError.innerHTML = 'Passwords do not match.';
    } else {
        noMatchError.innerHTML = '';
    }
})