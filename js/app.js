import {
  setBackground,
  setupBackgroundButtons,
  updateWindow
} from "./backgrounds.js";

import {
  updateAnimation,
  setupPetButtons
} from "./pet.js";

import { setupMessageTimer } from "./messages.js";

setBackground();
updateWindow();
setupBackgroundButtons();

updateAnimation();
setupPetButtons();

setupMessageTimer();

console.log("Valko is ready!");
