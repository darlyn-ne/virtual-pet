
const clockElement = document.querySelector("#pet-clock");
const dateElement = document.querySelector("#pet-date");

export function updateClock() {
  const now = new Date();

  clockElement.textContent = now.toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit"
  });

  dateElement.textContent = now.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  });
}

export function startClock() {
  updateClock();

  setInterval(updateClock, 1000);
}
