// road-rules.js - Member 2
// 1. traffic light buttons
// 2. quiz score


// ----- 1. traffic light -----

let redLight = document.getElementById("redLight");
let yellowLight = document.getElementById("yellowLight");
let greenLight = document.getElementById("greenLight");
let signalMessage = document.getElementById("signalMessage");

// turn all three lights grey (off)
function lightsOff() {
    redLight.style.backgroundColor = "#3a3a3a";
    yellowLight.style.backgroundColor = "#3a3a3a";
    greenLight.style.backgroundColor = "#3a3a3a";
}

document.getElementById("redBtn").onclick = function () {
    lightsOff();
    redLight.style.backgroundColor = "#ef4444";
    signalMessage.innerHTML = "RED - Stop completely behind the stop line.";
    signalMessage.style.color = "#b91c1c";
};

document.getElementById("yellowBtn").onclick = function () {
    lightsOff();
    yellowLight.style.backgroundColor = "#facc15";
    signalMessage.innerHTML = "YELLOW - Slow down and get ready to stop.";
    signalMessage.style.color = "#a16207";
};

document.getElementById("greenBtn").onclick = function () {
    lightsOff();
    greenLight.style.backgroundColor = "#22c55e";
    signalMessage.innerHTML = "GREEN - Go, but check the road first.";
    signalMessage.style.color = "#15803d";
};


// ----- 2. quiz -----

document.getElementById("quizBtn").onclick = function () {
    let score = 0;

    // ids of the correct options
    let correct = ["q1b", "q2a", "q3c"];

    for (let i = 0; i < correct.length; i++) {
        if (document.getElementById(correct[i]).checked) {
            score = score + 1;
        }
    }

    let result = document.getElementById("quizResult");

    if (score == 3) {
        result.innerHTML = "You scored 3 out of 3 - Great, you know your rules!";
        result.style.color = "#15803d";
    } else {
        result.innerHTML = "You scored " + score + " out of 3 - Read the rules once more.";
        result.style.color = "#b91c1c";
    }
};
