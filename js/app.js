const petMessage = document.querySelector("#pet-message");

console.log("Valko is ready!");

function updatePetMessage() {

  const timeOfDay = getTimeOfDay();
  const season = getSeason();

  const availableMessages = messages[season][timeOfDay];

  petMessage.textContent = getRandomMessage(availableMessages);
}

updatePetMessage();
