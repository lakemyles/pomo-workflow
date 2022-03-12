const timer = {
    startTimeInSeconds: 1500,
    timeInSeconds: 1500,
    intervalId: 1,
    display: document.querySelector("#main-timer"),
    title: document.querySelector("#timer-title"),
    startButton: document.querySelector("#start-button"),
    stopButton: document.querySelector("#stop-button"),
    resetButton: document.querySelector("#reset-button"),
    addLeadingZero(number) {
        return number < 10 ? "0" + number : number;
    },
    getMinutes() {
        return this.addLeadingZero(parseInt(this.timeInSeconds / 60, 10));
    },
    getSeconds() {
        return this.addLeadingZero(parseInt(this.timeInSeconds % 60, 10));
    },
    getDisplayTime() {
        return `${this.getMinutes()}:${this.getSeconds()}`;
    },
    setTitle(newTitle) {
        this.title.textContent = newTitle;
    },
    toggleButtons() {
        this.startButton.classList.toggle("is-hidden");
        this.stopButton.classList.toggle("is-hidden");
        if (this.timeInSeconds < this.startTimeInSeconds) {
            this.resetButton.classList.toggle("is-hidden");
        }
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
        this.setTitle("Let's get to work!");
        this.updateTime();
        this.toggleButtons();
    },
    stop() {
        this.setTitle("Oh no! Timer stopped!");
        this.pauseTime();
        this.toggleButtons();
    },
    reset() {
        this.setTitle("Pomodoro");
        this.timeInSeconds = this.startTimeInSeconds;
        this.updateDisplay();
        this.resetButton.classList.add("is-hidden");
    }
};

timer.startButton.addEventListener("click", () => timer.start());
timer.stopButton.addEventListener("click", () => timer.stop());
timer.resetButton.addEventListener("click", () => timer.reset());