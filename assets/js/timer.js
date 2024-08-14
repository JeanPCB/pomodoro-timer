function timer() {
    // Variables
    let mins = document.querySelector(".minutes");
    let secs = document.querySelector(".seconds");
    const runBtn = document.querySelector(".run-btn");
    
    const standardTime = minutesToSec(25);
    let seconds = standardTime;
    let runTime = null;
    
    // Invoking
    document.addEventListener("click", (e) => {
        el = e.target;

        if(el.classList.contains("start-btn")) {
            start();
            toggleBtn(el, "start-btn", "stop-btn", "STOP");
            return;
        }

        if(el.classList.contains("stop-btn")) {
            stop();
            toggleBtn(el, "stop-btn", "start-btn", "START");
            return;
        }

        if(el.classList.contains("work-btn")) {
            reset();
            return;
        }

        if(el.classList.contains("short-btn")) {
            reset("shortBreak");
            return;
        }

        if(el.classList.contains("long-btn")) {
            reset("longBreak");
            return;
        }
    })

    // Functions
    function start() {
        runTime = setInterval(() => {
            if(seconds == 0) return;

            seconds--;
            displayTime(seconds);
        }, 1000);
    }

    function stop() {
        clearInterval(runTime);
    }

    function reset(type) {
        clearInterval(runTime);
        toggleBtn(runBtn, "stop-btn", "start-btn", "START");

        switch (type) {
            case "shortBreak":
                setTimeText("05", "00");
                seconds = minutesToSec(5);
                break;

            case "longBreak":
                setTimeText("15", "00");
                seconds = minutesToSec(15);
                break;
            
            default:
                setTimeText("25", "00");
                seconds = standardTime;
                break;
        }
    }

    function toggleBtn(el, oldClass, newClass, inText) {
        el.classList.add(newClass);
        el.classList.remove(oldClass);
        el.innerText = inText;
    }

    function minutesToSec(minutes) {
        return minutes * 60;
    }

    function getTimeFromSec(sec) {
        const date = new Date(sec * 1000);
        return date;
    }

    function setTimeText(minutes, seconds) {
        mins.innerText = minutes;
        secs.innerText = seconds;
    }

    function displayTime(seconds) {
        const minute = getTimeFromSec(seconds).getMinutes();
        const second = getTimeFromSec(seconds).getSeconds();

        mins.innerText = timeLeftZero(minute);
        secs.innerText = timeLeftZero(second);
    }

    function timeLeftZero(timeUnit) {
        if(timeUnit < 10) {
            return `0${timeUnit}`;
        } else {
            return timeUnit;
        }
    }
}