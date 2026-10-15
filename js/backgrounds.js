import { getTimeOfDay, getSeason } from "./time.js";

const backgroundImage = document.querySelector("#background");
const windowImage = document.querySelector("#window");

let currentBackground = "cafe";

export function setBackground() {

  const backgroundPath =
    `assets/backgrounds/${currentBackground}/bg.png`;

  background.src =
    `assets/backgrounds/${currentBackground}/bg.png`;

  console.log("Ambiente selezionato:", currentBackground);
  console.log("Percorso immagine:", backgroundPath);

}

export function setupBackgroundButtons() {
  const buttons = {
    "button-cafe": "cafe",
    "button-home": "home",
    "button-laboratory": "laboratory",
    "button-forest": "forest"
  };

  for (const [buttonId, backgroundName] of Object.entries(buttons)) {
    const button = document.querySelector(`#${buttonId}`);

    button.addEventListener("click", () => {
      currentBackground = backgroundName;
      setBackground();
    });
  }
}

export function updateWindow() {
  const timeOfDay = getTimeOfDay();
  const season = getSeason();

  const windowPath =
    `assets/backgrounds/window/${season}/${timeOfDay}.png`;

  window.src =
    `assets/backgrounds/window/${season}/${timeOfDay}.png`;

  console.log("Stagione rilevata:", season);
  console.log("Ora del giorno rilevata:", timeOfDay);
  console.log("Percorso immagine finestra:", window.src);

}
