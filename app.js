


const submitBtn = document.getElementById('submit-btn');
const email = document.getElementById('email');

// Confirm passwords
const pwd = document.getElementById('password');
const pwdConfirm = document.getElementById('password-confirm');
const noMatchError = document.getElementById('no-match-error');

function confirmPwd() {
    if (pwd.value !== pwdConfirm.value) {
        noMatchError.innerHTML = '<span>*</span>Passwords do not match.';
        pwdConfirm.classList.add('error');
    } else {
        noMatchError.innerHTML = '';
        pwdConfirm.classList.remove('error');
    }
};

pwdConfirm.addEventListener('keyup', confirmPwd);
pwd.addEventListener('keyup', confirmPwd);

// Password error messages
const lengthError = document.getElementById('length-error');
const letterError = document.getElementById('letter-error');
const numberError = document.getElementById('number-error');
const specialCharError = document.getElementById('special-char-error');

function checkPwd() {
    let pwdValue = pwd.value;
    const letterRegex = /[A-Za-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[@$!%*#?&]/;
    
    if (pwdValue.length < 8 || pwdValue.length > 20) {
        lengthError.innerHTML = '<span>*</span>Include 8-20 characters';
        pwdConfirm.classList.add('error');
    } else {
        lengthError.innerHTML = '';
        pwdConfirm.classList.remove('error');
    }

    if (!letterRegex.test(pwdValue)) {
        letterError.innerHTML = '<span>*</span>Include at least one letter';
        pwdConfirm.classList.add('error');
    } else {
        letterError.innerHTML = '';
        pwdConfirm.classList.remove('error');
    }

    if (!numberRegex.test(pwdValue)) {
        numberError.innerHTML = '<span>*</span>Include at least one number';
        pwdConfirm.classList.add('error');
    } else {
        numberError.innerHTML = '';
        pwdConfirm.classList.remove('error');
    }

    if (!specialCharRegex.test(pwdValue)) {
        specialCharError.innerHTML = '<span>*</span>Include at least one special character (@$!%*#?&)';
        pwdConfirm.classList.add('error');
    } else {
        specialCharError.innerHTML = '';
        pwdConfirm.classList.remove('error');
    }
}

pwd.addEventListener('keyup', checkPwd);