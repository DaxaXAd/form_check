const form = document.getElementById("registrationForm");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
let errors = document.querySelectorAll("small");


const mailCheck = /^\S+@\S+.\S+$/;
const numberCharac = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;

let isValid = false;
let userNameValid = false;
let mailValid = false;
let pwdValid = false;
let confirmPwdValid = false;


//I'm a comment inside a JavaScript file
form.addEventListener('submit', function (event) {
    if (isValid === false) {

        event.preventDefault();
    } else {

        form.submit();

    }
})

for (const input of inputs) {
    input.addEventListener("blur", function (event) {
        event.preventDefault();

        let currentInput = event.target;
        errors = currentInput.nextElementSibling;

        //==============================
        if (currentInput.id === "username") {

            if (currentInput.value.length >= 5) {
                userNameValid = true;
                errors.textContent = " ";

            } else {
                userNameValid = false;
                errors.textContent = "use a username valid";

            }
            //===============================
            if (currentInput.id === "email") {

                if (mailCheck.test(currentInput.value)) {
                    mailValid = true;
                    errors.textContent = " ";

                } else {
                    mailValid = false;
                    errors.innerHTML = "email invalid";


                }
            }
            //=====================================
            if (currentInput.id === "password") {

                if (numberCharac.test(currentInput.value)) {

                    pwd = currentInput.value;
                    pwdValid = true;
                    errors.textContent = " ";
                } else {
                    pwdValid = false;
                    errors.innerHTML = "doesn't respond the conditions";

                }
            }
            //=============================================
            if (currentInput.id === "confirmPassword") {
            * (currentInput.value === pwd);

                if (currentInput.value === pwd) {

                    confirmPwdValid = true;
                    errors.textContent = " ";
                } else {
                    confirmPwdValid = false;
                    errors.textContent = "incorrect, retry!";


                }
            }

            if (userNameValid && mailValid && pwdValid && confirmPwdValid) {
                isValid = true;
            } else {
                isValid = false;
            }
        }
    })
}

































// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;




// input[0].addEventListener("blur", function() {
//     // event.preventDefault();

//     if (input[0].value.length > 5) {
//         isValid = true;
//         small[0].innerText = "";
//     } else {
//         isValid = false;
//         small[0].innerText = "sad"
//     }
// if (input[0].value.length > 5) {
//     isValid = true;
//     small[0].innerText = " ";
// } else {
//     isValid = false;
//     small[1].innerText = "sad";
// }
// });