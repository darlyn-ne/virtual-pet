import { getTimeOfDay, getSeason } from "./time.js";
import { updateBackground } from "./backgrounds.js";
import { updatePet } from "./pet.js";
import { messages, getRandomMessage } from "./messages.js";

updateBackground();
updatePet();


const petMessage = document.querySelector("#pet-message");

console.log("Valko is ready!");

function updatePetMessage() {

  const season = getSeason();
  const timeOfDay = getTimeOfDay();


  const availableMessages = messages[season][timeOfDay];

  petMessage.textContent = getRandomMessage(availableMessages);
}

updatePetMessage();
