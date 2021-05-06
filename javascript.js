var hour = 0;
var min = 0;
var sec = 0;
var tens = 0;
var appendHour = document.getElementById("hour");
var appendMin = document.getElementById("min");
var appendSec = document.getElementById("sec");
var appendTens = document.getElementById("tens");
var interval = null;

// status because when we click start btn 2 times, pause and reset btn donnt work
var status = "start";

function stopwatch() {

    tens += 10;
    if (tens / 1000 == 1) {
        tens = 0;
        sec++;

        if (sec / 60 == 1) {
            sec = 0;
            min++;

            if (min / 60 == 1) {
                min = 0;
                hour++;
            }
        }
    }

    // if hour min sec tens are 1 digit, add zero
    if (tens < 10) {
        document.getElementById("tens").innerText = "00" + tens;
    } else if (tens < 100) {
        document.getElementById("tens").innerHTML = "0" + tens;
    } else document.getElementById("tens").innerHTML = tens;

    if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec;
    } else document.getElementById("sec").innerHTML = sec;

    if (min < 10) {
        document.getElementById("min").innerHTML = "0" + min;
    } else document.getElementById("min").innerHTML = min;

    if (hour < 10) {
        document.getElementById("hour").innerHTML = "0" + hour;
    } else document.getElementById("hour").innerHTML = hour;
}

function startTimer() {

    if (status == "start") {
        interval = setInterval(stopwatch, 10);
        status = "stop";
    }
}

function stopTimer() {
    status = "start";
    clearInterval(interval);
}

function resetTimer() {
    status = "start";
    clearInterval(interval);
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("tens").innerHTML = "000";
}