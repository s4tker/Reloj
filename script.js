let timerInterval;
let seconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const darkModeClass = 'dark-mode';

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            timeDisplay.textContent = formatTime(seconds);
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    seconds = 0;
    timeDisplay.textContent = '00:00:00';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

themeToggle.addEventListener('click', () => {
    body.classList.toggle(darkModeClass);
    if (body.classList.contains(darkModeClass)) {
        themeToggle.classList.add('dark-mode');
    } else {
        themeToggle.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', body.classList.contains(darkModeClass) ? 'dark' : 'light');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add(darkModeClass);
    themeToggle.classList.add('dark-mode');
}
