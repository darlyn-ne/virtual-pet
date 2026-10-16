import { playButtonSound } from "./sounds.js";

let timer;
let timeLeft = 25 * 60; // 30 minutes in seconds

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

function setupPomodoroButtons() {
  const durationButtons = {
    "button-5min": 5,
    "button-10min": 10,
    "button-25min": 25,
    "button-50min": 50
  };

  for (const [buttonId, minutes] of Object.entries(durationButtons)) {
    const button = document.querySelector(`#${buttonId}`);

    button.addEventListener("click", () => {
      playButtonSound();
      setTimer(minutes);
    });
  }

  const startButton = document.querySelector("#button-start");
  const stopButton = document.querySelector("#button-stop");

  startButton.addEventListener("click", () => {
    playButtonSound();
    startTimer();
  });

  stopButton.addEventListener("click", () => {
    playButtonSound();
    stopTimer();
  });
}

setupPomodoroButtons();
updateTimer();
