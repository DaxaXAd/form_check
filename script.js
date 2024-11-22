const form = document.getElementById("registrationForm");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
let errors = document.querySelectorAll("small");


let mailCheck = /^\S+@\S+.\S+$/;
const numberCharac = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let isValid = false;
let userName = "";


//I'm a comment inside a JavaScript file
document.addEventListener('submit', function (event) {
    if (isValid === false) {
        console.log(isValid);
        event.preventDefault();
    } else {
        
        form.submit();
        
    }
})

for (const input of inputs) {
    input.addEventListener("blur", function (event) {
        event.preventDefault();

        let currentInput = event.target;
        errors = event.target;

        //==============================
        if (currentInput.id === "username") {

            if (currentInput.value.length >= 5) {
                // isValid = true
                console.log("username ok");
            } else {
                errors.innerHTML = "that's sad";
                console.log(errors.innerHTML);
            }
        }
        //===============================
        if (currentInput.id === "email") {

            if (mailCheck.test(currentInput.value)) {
                // isValid = true;
                console.log("email ok");
            } else {
                errors.innerHTML = "that's also sad";
                console.log(errors.innerHTML);

            }
        }
        //=====================================
        if (currentInput.id === "password") {

            if (numberCharac.test(currentInput.value)) {
                console.log("password accepted");
            } else {
                errors.innerHTML= "very sad";
                console.log(errors.innerHTML);
            }
        }
    })
}

console.log(numberCharac);































// const regex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;




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