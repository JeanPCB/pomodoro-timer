function timer() {
    // Variables
    const time = document.querySelector("#time");
    let mins = document.querySelector(".minutes");
    let secs = document.querySelector(".seconds");
    // const startBtn = document.querySelector(".start-btn");
    // const stopBtn = document.querySelector(".stop-btn");
    // const resetBtn = document.querySelector(".reset-btn");
    
    const standardTime = minutesToSec(25);
    let seconds = standardTime;
    let runTime = null;
    
    // Invoking
    document.addEventListener("click", (e) => {
        el = e.target;

        if(el.classList.contains("start-btn")) {
            start();
            return;
        }

        if(el.classList.contains("stop-btn")) {
            stop();
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

        switch (type) {
            case "shortBreak":
                mins.innerText = "05";
                secs.innerText = "00";
                seconds = minutesToSec(5);
                break;

            case "longBreak":
                mins.innerText = "15";
                secs.innerText = "00";
                seconds = minutesToSec(15);
                break;
            
            default:
                mins.innerText = "25";
                secs.innerText = "00";
                seconds = standardTime;
                break;
        }
    }

    function minutesToSec(minutes) {
        return minutes * 60;
    }

    function getTimeFromSec(sec) {
        const date = new Date(sec * 1000);
        return date;
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

timer()