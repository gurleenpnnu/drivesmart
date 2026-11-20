// courses.js - Member 2
// fee calculator on the courses page

let calcBtn = document.getElementById("calcBtn");

calcBtn.onclick = function () {
    let course = document.getElementById("feeCourse").value;
    let extra = document.getElementById("extraClasses").value;
    let licence = document.getElementById("licenceHelp").checked;
    let result = document.getElementById("feeResult");

    let fee = 0;

    if (course == "car") {
        fee = 6500;
    } else if (course == "bike") {
        fee = 3000;
    } else if (course == "advanced") {
        fee = 8000;
    } else {
        result.innerHTML = "Please select a course first";
        return;
    }

    // every extra class is Rs. 300
    if (extra != "") {
        fee = fee + Number(extra) * 300;
    }

    if (licence == true) {
        fee = fee + 1500;
    }

    result.innerHTML = "Total Fee: Rs. " + fee;
};
