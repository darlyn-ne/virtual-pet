
const buttonSound = new Audio("assets/sounds/button-fx.mp3");
const petInteractionSound = new Audio("assets/sounds/interaction-fx.mp3");

export function playButtonSound() {
  buttonSound.currentTime = 0;
  buttonSound.play().catch(error => {
    console.warn("Impossibile riprodurre il suono:", error);
  });
}

export function playPetInteractionSound() {
  petInteractionSound.currentTime = 0;
  petInteractionSound.play().catch(error => {
    console.warn("Impossibile riprodurre il suono:", error);
  });
}