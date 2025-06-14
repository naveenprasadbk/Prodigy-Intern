let timer;
let isRunning = false;
let time = 0;  // Time in seconds
let lapTimes = [];

const startPauseBtn = document.getElementById('startPauseBtn');
const recordLapBtn = document.getElementById('recordLapBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function startStopwatch() {
    isRunning = true;
    startPauseBtn.textContent = 'Pause';
    recordLapBtn.disabled = false;  // Enable lap button
    timer = setInterval(() => {
        time++;
        updateDisplay();
    }, 1000);
}

function pauseStopwatch() {
    isRunning = false;
    startPauseBtn.textContent = 'Resume';
    recordLapBtn.disabled = true;  // Disable lap button
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    time = 0;
    lapTimes = [];
    updateDisplay();
    lapList.innerHTML = '';
    startPauseBtn.textContent = 'Start';
    recordLapBtn.disabled = true;  // Disable lap button
    clearInterval(timer);
}

function recordLap() {
    lapTimes.push(time);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapTimes.length}: ${formatTime(time)}`;
    lapList.appendChild(lapItem);
}

function updateDisplay() {
    display.textContent = formatTime(time);
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

startPauseBtn.addEventListener('click', () => {
    if (isRunning) {
        pauseStopwatch();
    } else {
        startStopwatch();
    }
});

recordLapBtn.addEventListener('click', recordLap);

resetBtn.addEventListener('click', resetStopwatch);
