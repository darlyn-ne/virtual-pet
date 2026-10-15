let timer;
let timeLeft = 30 * 60; // 30 minutes in seconds

const timerSound = document.querySelector('.js-timer-sound');

function updateTimer() {
  const timerElement = document.querySelector('.js-timer-value');

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timerElement.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timer) {
    return;
  }

  timer = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      timerSound.play();
    }
  }, 1000);
}


function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function setTimer(minutes) {
  clearInterval(timer);
  timeLeft = minutes * 60;
  updateTimer();
}

updateTimer();
