let timer; // Timer variable

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let seconds = 0;
let minutes = 0;

function startTimer() {
  timer = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    display.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  display.textContent = `0:00`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
