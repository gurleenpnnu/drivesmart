// home.js - Member 1
// shows a greeting on the home page according to the time of the day

function showGreeting() {
    let today = new Date();
    let hour = today.getHours();
    let message = "";

    if (hour < 12) {
        message = "Good Morning! Morning batches start at 7:00 AM.";
    } else if (hour < 17) {
        message = "Good Afternoon! Book a free trial class today.";
    } else {
        message = "Good Evening! Evening batches run till 8:00 PM.";
    }

    document.getElementById("greeting").innerHTML = message;
}

showGreeting();
