const form = document.getElementById("registrationForm");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
let errors = document.querySelectorAll("small");


let mailCheck = /^\S+@\S+.\S+$/;
let isValid = false;
let userName = "";



for (const input of inputs) {
    input.addEventListener ("blur", function(event) { 
        // event.preventDefault();       
        
        let currentInput = event.target;
        errors = event.target;
        
        if (currentInput.id === "username") {
            
            if (currentInput.value.length >= 5) {
                isValid = true
                console.log("username ok");                
            } else {
                errors.innerHTML = "that's sad";
                console.log(errors.innerHTML);                
            }
            
        }
    })
    
}





































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