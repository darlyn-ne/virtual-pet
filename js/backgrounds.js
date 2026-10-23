import { getTimeOfDay, getSeason } from "./time.js";
import { playButtonSound } from "./sounds.js";

const backgroundImage = document.querySelector("#background");
const windowImage = document.querySelector("#window");

let currentBackground = localStorage.getItem("presentBackground") || "cafe";

export function setBackground() {

  const backgroundPath =
    `assets/backgrounds/${currentBackground}/bg.png`;

  background.src = backgroundPath;

  /*   console.log("Ambiente selezionato:", currentBackground);
    console.log("Percorso immagine:", backgroundPath); */

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

      localStorage.setItem("presentBackground", currentBackground);

      setBackground();
      playButtonSound();
    });
  }
}

export function updateWindow() {
  const timeOfDay = getTimeOfDay();
  const season = getSeason();

  const windowPath =
    `assets/backgrounds/window/${season}/${timeOfDay}.png`;

  windowImage.src = windowPath;

  /*console.log("Stagione:", season);
  console.log("Fascia oraria:", timeOfDay);
  console.log("Percorso finestra:", windowPath);*/


}
