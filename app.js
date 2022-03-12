const timer = {
    startTimeInSeconds: 1500,
    timeInSeconds: 1500,
    intervalId: 1,
    display: document.querySelector("#main-timer"),
    getMinutes() {
        return parseInt(this.timeInSeconds / 60, 10)
    },
    getSeconds() {
        return parseInt(this.timeInSeconds % 60, 10)
    },
    getDisplayTime() {
        let minutes = this.getMinutes();
        let seconds = this.getSeconds();

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return `${minutes}:${seconds}`;
    },
    updateDisplay() {
        this.display.textContent = this.getDisplayTime();
    },
    updateTime() {
        this.intervalId = setInterval(() => {
            this.timeInSeconds--;
            this.updateDisplay();
        }, 1000);
    },
    pauseTime() {
        clearInterval(this.intervalId);
    },
    start() {
        timerTitle.textContent = "Let's get to work!";
        this.updateTime();
        toggleButtons();
    },
    stop() {
        timerTitle.textContent = "Oh no! Timer stopped!";
        this.pauseTime();
        toggleButtons();
    },
    reset() {
        timerTitle.textContent = "Pomodoro";
        this.timeInSeconds = this.startTimeInSeconds;
        this.updateDisplay();
        resetButton.classList.add("is-hidden");
    }
}

const timerTitle = document.querySelector("#timer-title");
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const resetButton = document.querySelector("#reset-button");

startButton.addEventListener("click", () => timer.start());
stopButton.addEventListener("click", () => timer.stop());
resetButton.addEventListener("click", () => timer.reset());

function toggleButtons() {
    startButton.classList.toggle("is-hidden");
    stopButton.classList.toggle("is-hidden");
    if (timer.timeInSeconds < timer.startTimeInSeconds) {
        resetButton.classList.toggle("is-hidden");
    }
}
