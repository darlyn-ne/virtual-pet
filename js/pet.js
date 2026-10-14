
const petGif = document.querySelector("#pet");

let currentSkin = "butler";
let currentAnimation = "standing";

export function updatePet() {
  petGif.src =
    `assets/pet/${currentSkin}/${currentAnimation}.gif`;
}
