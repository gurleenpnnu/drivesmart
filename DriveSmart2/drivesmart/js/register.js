// register.js - Member 3
// 1. shows the slider value
// 2. checks the register form before submitting


// ----- 1. experience slider -----

let expSlider = document.getElementById("rExp");

expSlider.oninput = function () {
    document.getElementById("expValue").innerHTML = expSlider.value + " months";
};


// ----- 2. form validation -----

let registerForm = document.getElementById("registerForm");

registerForm.onsubmit = function () {
    let name = document.getElementById("rName").value;
    let email = document.getElementById("rEmail").value;
    let phone = document.getElementById("rPhone").value;
    let dob = document.getElementById("rDob").value;
    let course = document.getElementById("rCourse").value;
    let pass = document.getElementById("rPass").value;
    let confirmPass = document.getElementById("rConfirm").value;
    let terms = document.getElementById("rTerms").checked;

    if (name == "" || email == "" || phone == "" || dob == "" || course == "") {
        alert("All fields with * are mandatory");
        return false;
    }

    if (phone.length != 10) {
        alert("Mobile number should be of 10 digits");
        return false;
    }

    // find age from the birth year
    let birthYear = new Date(dob).getFullYear();
    let thisYear = new Date().getFullYear();
    let age = thisYear - birthYear;

    if (age < 16) {
        alert("Minimum age to join is 16 years");
        return false;
    }

    if (course == "Car Training" && age < 18) {
        alert("You must be 18 years old for car training");
        return false;
    }

    if (pass.length < 6) {
        alert("Password should have at least 6 characters");
        return false;
    }

    if (pass != confirmPass) {
        alert("Password and Confirm password should be same");
        return false;
    }

    if (terms == false) {
        alert("Please accept the terms and conditions");
        return false;
    }

    alert("Registration successful! Please login now.");
    return true;
};
