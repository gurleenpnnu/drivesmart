// dashboard.js - Member 3
// 1. welcome name and date
// 2. count learners
// 3. remove learner
// 4. add learner
// 5. search learner
// 6. logout


// ----- 1. welcome name and date -----

let user = localStorage.getItem("userName");

if (user == null) {
    user = "Guest";
}

document.getElementById("welcomeName").innerHTML = "Welcome, " + user;

let today = new Date();
let dateText = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
document.getElementById("todayDate").innerHTML = "Today: " + dateText;


// ----- 2. count learners -----

let learnerBody = document.getElementById("learnerBody");

function countLearners() {
    let rows = learnerBody.getElementsByTagName("tr");
    document.getElementById("learnerCount").innerHTML = rows.length;
}

countLearners();


// ----- 3. remove learner -----

function removeRow() {
    // this = the button, its parent is <td>, and the td's parent is <tr>
    this.parentElement.parentElement.remove();
    countLearners();
}

// remove buttons that are already in the table
let deleteButtons = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = removeRow;
}


// ----- 4. add learner -----

document.getElementById("addBtn").onclick = function () {
    let name = document.getElementById("newName").value;
    let phone = document.getElementById("newPhone").value;
    let course = document.getElementById("newCourse").value;

    if (name == "" || phone == "" || course == "") {
        alert("Please enter learner name, phone and course");
        return;
    }

    if (phone.length != 10) {
        alert("Phone number should be of 10 digits");
        return;
    }

    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.innerHTML = name;

    let phoneCell = document.createElement("td");
    phoneCell.innerHTML = phone;

    let courseCell = document.createElement("td");
    courseCell.innerHTML = course;

    // a new learner starts with 0% progress
    let progressCell = document.createElement("td");
    progressCell.innerHTML = "<progress value='0' max='100'></progress> 0%";

    let actionCell = document.createElement("td");
    let btn = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.className = "delete-btn";
    btn.onclick = removeRow;
    actionCell.appendChild(btn);

    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    row.appendChild(courseCell);
    row.appendChild(progressCell);
    row.appendChild(actionCell);

    learnerBody.appendChild(row);

    // empty the boxes again
    document.getElementById("newName").value = "";
    document.getElementById("newPhone").value = "";
    document.getElementById("newCourse").value = "";

    countLearners();
};


// ----- 5. search learner -----

let searchBox = document.getElementById("searchBox");

searchBox.oninput = function () {
    let text = searchBox.value.toLowerCase();
    let rows = learnerBody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let name = rows[i].getElementsByTagName("td")[0].innerHTML.toLowerCase();

        if (name.includes(text)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
};


// ----- 6. logout -----

document.getElementById("logoutBtn").onclick = function () {
    localStorage.removeItem("userName");
};
