let timerInterval;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (!running) {
    running = true;
    timerInterval = setInterval(() => {
      elapsedTime += 1000;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timerInterval);
  running = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  running = false;
  display.textContent = "00:00:00";
  lapsContainer.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (running) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsContainer.appendChild(lapItem);
  }
});

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, '0');
}
