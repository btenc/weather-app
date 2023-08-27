import { updateLocation, locationData } from "./weatherapi";

const currentInfoDisplay = document.querySelector(".current-info-section");
const advancedInfoSection = document.querySelector(".advanced-info-section");
const searchButton = document.querySelector("#submit-button");
const searchInput = document.querySelector("#query");

function changeElements() {
  currentInfoDisplay.innerHTML = "";
  advancedInfoSection.innerHTML = "";
  const tempContainer = document.createElement("div");
  tempContainer.classList.add("info-container");
  const temp = document.createElement("h2");
  temp.classList.add("current-temp");
  temp.textContent = `${locationData.temp}°`;
  tempContainer.appendChild(temp);

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("info-container");
  const location = document.createElement("h3");
  location.classList.add("location");
  location.textContent = `${locationData.name}, ${locationData.region}`;
  const date = document.createElement("h4");
  date.classList.add("date");
  date.textContent = locationData.date;
  locationContainer.appendChild(location);
  locationContainer.appendChild(date);

  const conditionContainer = document.createElement("div");
  conditionContainer.classList.add("info-container");
  const conditionIcon = document.createElement("img");
  conditionIcon.classList.add("condition-icon");
  // conditionIcon.src = getIcon();
  const condition = document.createElement("h3");
  condition.classList.add("current-condition");
  condition.textContent = locationData.condition;
  conditionContainer.appendChild(conditionIcon);
  conditionContainer.appendChild(condition);

  currentInfoDisplay.appendChild(tempContainer);
  currentInfoDisplay.appendChild(locationContainer);
  currentInfoDisplay.appendChild(conditionContainer);

  const humidity = document.createElement("h4");
  humidity.classList.add("humidity");
  humidity.textContent = `Humidity: ${locationData.humidity}%`;
  humidity.classList.add("advanced-detail");

  const wind = document.createElement("h4");
  wind.classList.add("wind");
  wind.textContent = `Wind: ${locationData.wind}${locationData.windDirection}`;
  wind.classList.add("advanced-detail");

  const rain = document.createElement("h4");
  rain.classList.add("rain");
  rain.textContent = `Rain: ${locationData.rain}`;
  rain.classList.add("advanced-detail");

  const uv = document.createElement("h4");
  uv.classList.add("uv");
  uv.textContent = `UV: ${locationData.uv}`;
  uv.classList.add("advanced-detail");

  advancedInfoSection.appendChild(humidity);
  advancedInfoSection.appendChild(wind);
  advancedInfoSection.appendChild(rain);
  advancedInfoSection.appendChild(uv);
}

async function updateDisplay(newLocation) {
  await updateLocation(newLocation);
  changeElements();
}

function resetForm() {
  searchInput.innerHTML = "";
}

searchButton.addEventListener("click", () => {
  updateDisplay(searchInput.value);
  resetForm();
});

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "Enter") {
    event.preventDefault();
    updateDisplay(searchInput.value);
    resetForm();
  }
});

export default updateDisplay;
