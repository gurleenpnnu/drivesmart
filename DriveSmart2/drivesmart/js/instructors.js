// instructors.js - Member 2
// "Read More" button on each instructor card shows / hides the bio

let bioButtons = document.getElementsByClassName("bio-btn");
let bios = document.getElementsByClassName("bio");

for (let i = 0; i < bioButtons.length; i++) {
    bioButtons[i].onclick = function () {
        if (bios[i].style.display == "block") {
            bios[i].style.display = "none";
            bioButtons[i].innerHTML = "Read More";
        } else {
            bios[i].style.display = "block";
            bioButtons[i].innerHTML = "Show Less";
        }
    };
}
