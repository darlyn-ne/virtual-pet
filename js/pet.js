const petGif = document.querySelector("#pet");

const animations = [
  "standing",
  "walking",
  "reading",
  "eating",
  "sleeping"
];


let currentSkin = "butler";
let currentAnimation = "standing";

export function updatePet() {
  const petPath =
    `assets/pet/${currentSkin}/${currentAnimation}.gif`;

  petGif.src =
    `assets/pet/${currentSkin}/${currentAnimation}.gif`;

  console.log("Skin selezionata:", currentSkin);
  console.log("Animazione selezionata:", currentAnimation);
  console.log("Percorso Skin:", petPath);
}

export function updateAnimation() {
  updatePet();

  setInterval(changeRandomAnimation, 5 * 60 * 1000);
}

function changeRandomAnimation() {
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
    });
  }
}