// contact.js - Member 1
// 1. checks the enquiry form before sending
// 2. shows / hides the faq answers


// ----- 1. form validation -----

let contactForm = document.getElementById("contactForm");

contactForm.onsubmit = function () {
    let name = document.getElementById("cName").value;
    let phone = document.getElementById("cPhone").value;
    let email = document.getElementById("cEmail").value;
    let course = document.getElementById("cCourse").value;

    if (name == "" || phone == "" || email == "" || course == "") {
        alert("Please fill all the fields with *");
        return false;
    }

    if (phone.length != 10) {
        alert("Phone number should be of 10 digits");
        return false;
    }

    alert("Thank you " + name + "! Our team will call you soon.");
    return true;
};


// ----- 2. faq -----

let questions = document.getElementsByClassName("faq-question");
let answers = document.getElementsByClassName("faq-answer");

// give every question button its own click function
for (let i = 0; i < questions.length; i++) {
    questions[i].onclick = function () {
        if (answers[i].style.display == "block") {
            answers[i].style.display = "none";
        } else {
            answers[i].style.display = "block";
        }
    };
}
