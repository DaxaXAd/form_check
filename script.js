const form = document.getElementById('registrationForm');
const input = document.querySelectorAll('input');
const submit = document.querySelector('submit');
const button = document.querySelector('button');
const small = document.querySelector('.error-message').value;

console.log(form);
console.log(input);
console.log(submit);
console.log(button);


// const usrName = document.getElementById('username');
// const mail = document.getElementById('email');
// const passwd = document.getElementById('password');
// const confirmPwd = document.getElementById('confirmPassword');

// console.log(usrName);
// console.log(mail);
// console.log(passwd);
// console.log(confirmPwd);



let mailCheck = /^\S+@\S+.\S+$/;



form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = false;

    if (input[0].value.length > 5) {
        isValid = true;
        small[0].innerText;        
    } else {
        
    }
    
    if (mailCheck.test(input[1].value)) {
        isValid = true;
    }
    console.log(isValid);    
});