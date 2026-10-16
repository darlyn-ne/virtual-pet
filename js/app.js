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

import { setupPetInteraction } from "./pet.js";

/*import { startClock } from "./clock.js";*/

setBackground();
updateWindow();
setupBackgroundButtons();

updateAnimation();
setupPetButtons();

setupMessageTimer();

setupPetInteraction();

/* startClock(); */

console.log("Valko is ready to howling for love!");
