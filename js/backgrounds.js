import { getTimeOfDay, getSeason } from "./time.js";

const backgroundImage = document.querySelector("#background");
const windowImage = document.querySelector("#window");

let currentBackground = "cafe";

export function updateBackground() {
  const timeOfDay = getTimeOfDay();
  const season = getSeason();

  const backgroundPath =
    `assets/backgrounds/${currentBackground}/bg.png`;

  const windowPath =
    `assets/backgrounds/window/${season}/${timeOfDay}.png`;

  background.src =
    `assets/backgrounds/${currentBackground}/bg.png`;

  window.src =
    `assets/backgrounds/window/${season}/${timeOfDay}.png`;

  console.log("Ambiente selezionato:", currentBackground);
  console.log("Stagione rilevata:", season);
  console.log("Ora del giorno rilevata:", timeOfDay);
  console.log("Percorso immagine finestra:", window.src);

}
