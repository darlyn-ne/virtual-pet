import { playButtonSound } from "./sounds.js";
import { getTimeOfDay } from "./time.js";
import { playPetInteractionSound } from "./sounds.js";

const petGif = document.querySelector("#pet");

const animations = [
  "standing",
  "walking",
  "reading",
  "eating",
  "sleeping"
];


let currentSkin = localStorage.getItem("presentSkin") || "butler";
let currentAnimation = "standing";
let previousAnimation = "standing";
let isInteracting = false;
let interactionTimer;

export function updatePet() {
  const petPath =
    `assets/pet/${currentSkin}/${currentAnimation}.gif`;

  petGif.src =
    `assets/pet/${currentSkin}/${currentAnimation}.gif`;

  /*   console.log("Skin selezionata:", currentSkin);
    console.log("Animazione selezionata:", currentAnimation);
    console.log("Percorso Skin:", petPath);*/
}

export function updateAnimation() {
  if (getTimeOfDay() === "night") {
    currentAnimation = "sleeping";
  }
  updatePet();

  setInterval(changeRandomAnimation, 5 * 60 * 1000);
}

function changeRandomAnimation() {
  if (isInteracting) return;

  if (getTimeOfDay() === "night") {
    currentAnimation = "sleeping";
    updatePet();
    return;
  }

  const availableAnimations = animations.filter(
    animation => animation !== currentAnimation
  );

  const randomIndex = Math.floor(
    Math.random() * availableAnimations.length
  );

  currentAnimation = availableAnimations[randomIndex];

  updatePet();
}

export function setPetSkin(skinName) {
  currentSkin = skinName;
  localStorage.setItem("presentSkin", currentSkin);
  updatePet();
}

export function setupPetButtons() {
  const buttons = {
    "button-butler": "butler",
    "button-lab": "lab",
    "button-combat": "combat",
    "button-cozy": "cozy"
  };

  for (const [buttonId, skinName] of Object.entries(buttons)) {
    const button = document.querySelector(`#${buttonId}`);

    if (!button) {
      console.warn(`Bottone non trovato: ${buttonId}`);
      continue;
    }

    button.addEventListener("click", () => {
      setPetSkin(skinName);
      playButtonSound();
    });
  }
}

export function interactWithPet() {
  if (isInteracting) return;

  playPetInteractionSound();

  previousAnimation = currentAnimation;
  isInteracting = true;

  if (getTimeOfDay() === "night") {
    currentAnimation = "night-interaction";
  } else {
    currentAnimation = "interaction";
  }

  updatePet();

  interactionTimer = setTimeout(() => {
    isInteracting = false;

    if (getTimeOfDay() === "night") {
      currentAnimation = "sleeping";
    } else {
      currentAnimation = previousAnimation;
    }

    updatePet();
  }, 2000);
}

export function setupPetInteraction() {
  petGif.addEventListener("click", interactWithPet);
}