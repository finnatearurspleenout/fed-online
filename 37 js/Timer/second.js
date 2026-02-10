window.onload = function() {
    let startBtn = document.querySelector('.start-btn');
    let resetBtn = document.querySelector('.reset-btn');
    let timerDisplay = document.querySelector('.timer p');
    let timeLeft = 25*60;
    let timerId = null;
    
    function updateDisplay() {
        let minutes = Math.floor(timeLeft/60);
        let seconds = timeLeft%60;
        let displayMinutes = minutes<10?'0' + minutes:minutes;
        let displaySeconds = seconds<10?'0' + seconds:seconds;
        timerDisplay.innerHTML = `${displayMinutes}:${displaySeconds}`;
    }

    startBtn.onclick = function() {
        if(timerId !== null) {
            return;
        }
        timerId = setInterval(function() {
            if(timeLeft>0) {
                timeLeft--;
                updateDisplay();
            }
            else {
                clearInterval(timerId);
                timerId = null;
            }
        }, 1000);
    }

    resetBtn.onclick = function() {
        clearInterval(timerId);
        timerId = null;
        timeLeft =25*60;
        updateDisplay();
    }
}