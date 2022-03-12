const timer = {
    startTimeInSeconds: 1500,
    timeInSeconds: 1500,
    intervalId: -1,
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
    start() {
        this.intervalId = setInterval(() => {
            this.timeInSeconds--;
            this.updateDisplay();
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
    },
    reset() {
        this.timeInSeconds = this.startTimeInSeconds;
        this.updateDisplay();
    }
}

const timerTitle = document.querySelector("#timer-title");
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const resetButton = document.querySelector("#reset-button");

startButton.addEventListener("click", function () {
    timerTitle.textContent = "Let's get to work!";
    timer.start();
    startButton.classList.add("is-hidden");
    stopButton.classList.remove("is-hidden");
    resetButton.classList.add("is-hidden");
});

stopButton.addEventListener("click", function () {
    timerTitle.textContent = "Oh no! Timer stopped!";
    timer.stop();
    startButton.classList.remove("is-hidden");
    stopButton.classList.add("is-hidden");
    resetButton.classList.remove("is-hidden");
});

resetButton.addEventListener("click", function () {
    timerTitle.textContent = "Pomodoro";
    timer.reset();
    resetButton.classList.add("is-hidden");
});
