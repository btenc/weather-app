import { updateLocation, locationData } from "./weatherapi";

const currentInfoDisplay = document.querySelector(".current-info-section");
const advancedInfoSection = document.querySelector(".advanced-info-section");
const searchButton = document.querySelector("#submit-button");
const searchInput = document.querySelector("#query");
const NY = document.querySelector(".new-york");
const rome = document.querySelector(".rome");
const california = document.querySelector(".california");

function getIcon() {
  return locationData.icon;
}

function changeElements() {
  currentInfoDisplay.innerHTML = "";
  advancedInfoSection.innerHTML = "";
  const tempContainer = document.createElement("div");
  tempContainer.classList.add("info-container");
  const temp = document.createElement("h2");
  temp.classList.add("current-temp");
  temp.textContent = `${locationData.temp}°F`;
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
  conditionIcon.src = getIcon();
  const condition = document.createElement("h3");
  condition.classList.add("current-condition");
  condition.textContent = locationData.condition;
  conditionContainer.appendChild(condition);
  conditionContainer.appendChild(conditionIcon);

  currentInfoDisplay.appendChild(tempContainer);
  currentInfoDisplay.appendChild(locationContainer);
  currentInfoDisplay.appendChild(conditionContainer);

  const humidityContainer = document.createElement("div");
  const humidity = document.createElement("h4");
  humidity.classList.add("humidity");
  humidity.textContent = `Humidity: `;
  humidity.classList.add("advanced-detail");
  const humidityStat = document.createElement("h4");
  humidityStat.classList.add("humidity");
  humidityStat.textContent = `${locationData.humidity}%`;
  humidityStat.classList.add("advanced-detail");
  humidityContainer.appendChild(humidity);
  humidityContainer.appendChild(humidityStat);

  const windContainer = document.createElement("div");
  const wind = document.createElement("h4");
  wind.classList.add("wind");
  wind.textContent = `Wind: `;
  wind.classList.add("advanced-detail");
  const windStat = document.createElement("h4");
  windStat.classList.add("wind");
  windStat.textContent = `${locationData.wind}mph ${locationData.windDirection}`;
  windStat.classList.add("advanced-detail");
  windContainer.appendChild(wind);
  windContainer.appendChild(windStat);

  const rainContainer = document.createElement("div");
  const rain = document.createElement("h4");
  rain.classList.add("rain");
  rain.textContent = `Rain: `;
  rain.classList.add("advanced-detail");
  const rainStat = document.createElement("h4");
  rainStat.classList.add("rain");
  rainStat.textContent = `${locationData.rain}in`;
  rainStat.classList.add("advanced-detail");
  rainContainer.appendChild(rain);
  rainContainer.appendChild(rainStat);

  const uvContainer = document.createElement("div");
  const uv = document.createElement("h4");
  uv.classList.add("uv");
  uv.textContent = `UV: `;
  uv.classList.add("advanced-detail");
  const uvStat = document.createElement("h4");
  uvStat.classList.add("uv");
  uvStat.textContent = `${locationData.uv}`;
  uvStat.classList.add("advanced-detail");
  uvContainer.appendChild(uv);
  uvContainer.appendChild(uvStat);

  const feelsLikeContainer = document.createElement("div");
  const feelsLike = document.createElement("h4");
  feelsLike.classList.add("feels-like");
  feelsLike.textContent = "Feels Like:";
  feelsLike.classList.add("advanced-detail");
  const feelsLikeStat = document.createElement("h4");
  feelsLikeStat.classList.add("feels-like");
  feelsLikeStat.textContent = `${locationData.feelsLike}°F`;
  feelsLikeStat.classList.add("advanced-detail");
  feelsLikeContainer.appendChild(feelsLike);
  feelsLikeContainer.appendChild(feelsLikeStat);

  advancedInfoSection.appendChild(humidityContainer);
  advancedInfoSection.appendChild(windContainer);
  advancedInfoSection.appendChild(rainContainer);
  advancedInfoSection.appendChild(uvContainer);
  advancedInfoSection.appendChild(feelsLikeContainer);
}

async function updateDisplay(newLocation) {
  await updateLocation(newLocation);
  changeElements();
}

function resetForm() {
  searchInput.value = "";
}

california.addEventListener("click", () => {
  updateDisplay("California");
});

NY.addEventListener("click", () => {
  updateDisplay("New York");
});

rome.addEventListener("click", () => {
  updateDisplay("Rome");
});

searchButton.addEventListener("click", () => {
  updateDisplay(searchInput.value);
  resetForm();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    updateDisplay(searchInput.value);
    resetForm();
  }
});

export default updateDisplay;
