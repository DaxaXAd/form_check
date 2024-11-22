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
        // console.log(isValid);
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
                // console.log("username ok");
            } else {
                userNameValid = false;
                errors.textContent = "use a username valid";
                // console.log(errors.textContent);
            }
        }
        //===============================
        if (currentInput.id === "email") {

            if (mailCheck.test(currentInput.value)) {
                mailValid = true;
                errors.textContent = " ";
                // console.log("email ok");
            } else {
                mailValid = false;
                errors.innerHTML = "email invalid";
                // console.log(errors.innerHTML);

            }
        }
        //=====================================
        if (currentInput.id === "password") {

            if (numberCharac.test(currentInput.value)) {
                // console.log("password accepted");
                pwd = currentInput.value;
                pwdValid = true;
                errors.textContent = " ";
            } else {
                pwdValid = false;
                errors.innerHTML= "doesn't respond the conditions";
                // console.log(errors.innerHTML);
            }
        }
        //=============================================
        if (currentInput.id === "confirmPassword") {
            // console.log(currentInput.value === pwd);
            
            if (currentInput.value === pwd ) {
                // console.log(currentInput.value);
                confirmPwdValid = true;
                errors.textContent = " ";
            } else {
                confirmPwdValid = false;
                errors.textContent = "incorrect, retry!";
                // console.log(errors.innerHTML);
                
            }
        }

        if(userNameValid  && mailValid  && pwdValid  && confirmPwdValid ) {
            isValid = true;
        } else {
            isValid = false;
        }
    })
}

// console.log(numberCharac);































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