function timer() {
    const time = document.querySelector("#time");
    let mins = document.querySelector(".minutes");
    let secs = document.querySelector(".seconds");
    const startBtn = document.querySelector(".start-btn");
    const stopBtn = document.querySelector(".stop-btn");
    const resetBtn = document.querySelector(".reset-btn");

    let seconds = minutesToSec(25);
    let timer;
    
    startBtn.addEventListener("click", () => {
        timer = setInterval(() => {
            seconds--;
            displayTime(seconds);
        }, 1000)
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(timer);
    });

    resetBtn.addEventListener("click", () => {
        clearInterval(timer);
        resetTimeText(mins, "25");
        resetTimeText(secs, "00");
        seconds = minutesToSec(25);
    });

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

    function resetTimeText(el, startValue) {
        el.innerText = startValue;
    }
}

timer()