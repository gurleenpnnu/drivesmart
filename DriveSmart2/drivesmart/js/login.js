// login.js - Member 3
// 1. show password checkbox
// 2. checks email and password, saves the user name in localStorage


// ----- 1. show password -----

document.getElementById("showPass").onclick = function () {
    let passBox = document.getElementById("lPass");

    if (passBox.type == "password") {
        passBox.type = "text";
    } else {
        passBox.type = "password";
    }
};


// ----- 2. login check -----

let loginForm = document.getElementById("loginForm");

loginForm.onsubmit = function () {
    let email = document.getElementById("lEmail").value;
    let pass = document.getElementById("lPass").value;

    if (email == "" || pass == "") {
        alert("Please enter email and password");
        return false;
    }

    // demo account for our project
    if (email == "admin@drivesmart.com" && pass == "drive123") {
        localStorage.setItem("userName", "Admin");
        return true;
    } else {
        alert("Wrong email or password");
        return false;
    }
};
