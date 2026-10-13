function getSeason() {

  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) {
    return "spring";
  }
  if (month >= 5 && month <= 7) {
    return "summer";
  }
  if (month >= 8 && month <= 10) {
    return "autumn";
  }
  return "winter";

}


function getTimeOfDay() {

  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    return "morning";
  }

  if (hour >= 12 && hour < 18) {
    return "afternoon";
  }

  if (hour >= 18 && hour < 21) {
    return "evening";
  }

  return "night";
}

const timeOfDay = getTimeOfDay();
const season = getSeason();

console.log("Season:", season);
console.log("Time:", timeOfDay);