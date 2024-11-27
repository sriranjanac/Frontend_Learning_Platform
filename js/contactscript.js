// FORM VALIDATION FOR CONTACT US PAGE 


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    // If form is valid 
    alert("Message successfully sent");

});

const validateForm = (form) => {
let valid = true;
//Check for empty fields
let name = form.querySelector(".name");
let message = form.querySelector(".message");
let email = form.querySelector(".email");

if (name.value ==""){
    giveError(name, "Please enter your name");
    valid = false;
}

if (message.value ==""){
    giveError(message, "Please enter a message");
    valid = false;
}

let emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let emailValue = email.value;
if(!emailRegex.test(emailValue))
    {
    giveError(email, "Please enter a valid email");
    valid=false;
}

};

const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    let existingError = parentElement.querySelector(".err-msg");
    if (existingError) {
        existingError.remove();
    }
    
    let error = document.createElement("span");
    error.textContent = message;
    error.classList.add("err-msg");
    parentElement.appendChild(error);

};

// Remove error on input 

const inputs = document.querySelectorAll("input")
const textareas = document.querySelectorAll("textarea")

let allFields = [...inputs, ...textareas]

allFields.forEach((field) => {
    field.addEventListener("input" , () => {
        removeError(field)
    });
});

const removeError = (field) => {
    let parentElement = field.parentElement;
    parentElement.classList.remove("error");
    let error = parentElement.querySelector(".err-msg");
    if(error) {
        error.remove();
    }

}

