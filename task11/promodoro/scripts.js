let promodoroBtn = document.getElementById('type-promodoro');
let shortBreakBtn = document.getElementById('type-short-break');
let longBreakBtn = document.getElementById('type-long-break');
let timeTxt = document.getElementById('time');
let timerStatusTxt = document.getElementById('timer-status');

let timerStatus = false;
let currentTimerStatus = () => (timerStatus ? "Running" : "Paused").toUpperCase();
let timerId = null;

function initialize() {
    onPromodoroBtnClick();

    promodoroBtn.onclick = onPromodoroBtnClick;
    shortBreakBtn.onclick = onShortBreakBtnClick;
    longBreakBtn.onclick = onLongBreakBtnClick;

    timeTxt.onclick = toggleTimerStatus;

    let lastTime = sessionStorage.getItem('time');
    if (lastTime != null) {
        timeTxt.innerText = lastTime;

        let status = sessionStorage.getItem('timerStatus');
        if (status != null) {
            timerStatus = (status === 'true');
            timerStatusTxt.innerText = currentTimerStatus();
            if (timerStatus) {
                timerStatus = false; // Set to false first to ensure toggle works correctly
                toggleTimerStatus();
            }
        }
    }
    
    window.onbeforeunload = () => {
        console.log("before unload event handler called");
        sessionStorage.setItem('time', timeTxt.innerText);
        sessionStorage.setItem('timerStatus', timerStatus.toString());
    };

    console.log("Initialized");
}

function onPromodoroBtnClick() {
    if (!checkTimerStatusAndWarnIfNeeded()) return;
    timeTxt.innerText = "25:00";
    timerStatusTxt.innerText = currentTimerStatus();
}

function onShortBreakBtnClick() {
    if (!checkTimerStatusAndWarnIfNeeded()) return;
    timeTxt.innerText = "5:00";
    timerStatusTxt.innerText = currentTimerStatus();
}

function onLongBreakBtnClick() {
    if (!checkTimerStatusAndWarnIfNeeded()) return;
    timeTxt.innerText = "15:00";
    timerStatusTxt.innerText = currentTimerStatus();
}

function checkTimerStatusAndWarnIfNeeded() {
    if (timerStatus) {
        alert("Timer is running. Please pause the timer before switching modes.");
        return false;
    }
    return true;
}

function toggleTimerStatus() {
    if (timerStatus == false) {
        timerStatus = true;
        timerId = setInterval(() => {
            let minSec = timeTxt.innerText.split(":");
            minSec[1] = parseInt(minSec[1]) - 1;
            
            if (minSec[1] < 0) {
                minSec[0] = parseInt(minSec[0]) - 1;
                minSec[1] = 59;
            }

            if (minSec[0] < 0) {
                clearInterval(timerId);
                timerStatus = false;
                timerStatusTxt.innerText = currentTimerStatus();

                alert("Timer finished!");
                
                return;
            }
            if (minSec[1] < 10) {
                minSec[1] = "0" + minSec[1];
            }
            timeTxt.innerText = minSec.join(":");
        }, 1000);
    }
    else {
        clearInterval(timerId);
        timerStatus = false;
    }
    
    timerStatusTxt.innerText = currentTimerStatus();
}


// Initialize the application
initialize();

