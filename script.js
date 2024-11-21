const form = document.getElementById('registrationForm');
const input = document.querySelectorAll('input');
const submit = document.querySelector('submit');
const button = document.querySelector('button');

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


let isValid = true;
let mailCheck = /^\S+@\S+.\S+$/;


button.addEventListener('click', function () {
    document.addEventListener('submit', function (event) {
        event.preventDefault();

        if (input[0].value.length < 5) {
            isValid = false;
            // }else if (mailCheck.test(mail)) {
            //     isValid = false;        
        } else {
            console.log(isValid);
        }
    });
});


