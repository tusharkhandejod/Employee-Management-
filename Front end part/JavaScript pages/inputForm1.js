//Validating user first name
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Invalid First Name";
    }
});

//Validating user last name
const text2 = document.querySelector('#text2');
const text2Error = document.querySelector('.text2-error');
text2.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text2.value)) {
        text2Error.textContent = "";
    } else {
        text2Error.textContent = "Invalid Last Name";
    }
});

//Validating Email
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp("^[A-Za-z]{3,}([.+_-][A-Za-z0-9]+)*[@][A-Za-z0-9]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?$");
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Invalid Email";
    }
});

//Validating mobile number
const mobileNumber = document.querySelector('#number');
const mobileNumberError = document.querySelector('.number-error');
mobileNumber.addEventListener('input', function() {
    let mobileNumberRegex = RegExp('^[0-9]{10}$');
    if (mobileNumberRegex.test(mobileNumber.value)) {
        mobileNumberError.textContent = "";
    } else {
        mobileNumberError.textContent = "Invalid Mobile Number";
    }
});


//Validating user's age
const userAge = document.querySelector('#number2');
const userAgeError = document.querySelector('.number2-error');
userAge.addEventListener('input',function(){
    let userAgeRegex = RegExp('^[0-9]{2}$');
    if(userAgeRegex.test(userAge.value)){
        userAgeError.textContent = "";
    }else{
        userAgeError.textContent = "Invalid Age";
    }
})

//Validating user's job role
const jobRole = document.querySelector('#text3');
const jobRoleError = document.querySelector('.text3-error');
jobRole.addEventListener('input', function() {
    let jobRoleRegex = RegExp('^[A-Za-z]{4,}$');
    if (jobRoleRegex.test(jobRole.value)) {
        jobRoleError.textContent = "";
    } else {
        jobRoleError.textContent = "Invalid input";
    }
});


const currentDate = new Date();
const date = document.querySelector('#date');
const dateError = document.querySelector('.validity');
let current = currentDate.getTime();
let date1 = date.getTime();
date.addEventListener('input',function(){
    if(date1 < current ){
        date1.textContent = "";
        }else{
            date1.textContent = "Future date entered";   
        }
})




