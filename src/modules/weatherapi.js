const API_KEY = "65e8d26eea604ffda61212448232508";

class Location {
  constructor(
    name,
    region,
    country,
    temp,
    condition,
    wind,
    windDirection,
    uv,
    feelsLike,
    humidity,
    rain
  ) {
    this.name = name;
    this.region = region;
    this.country = country;
    this.temp = temp;
    this.humidity = humidity;
    this.condition = condition;
    this.wind = wind;
    this.windDirection = windDirection;
    this.uv = uv;
    this.feelsLike = feelsLike;
    this.rain = rain;
    this.celsius = false;
    this.date = "Date not set";
    this.icon = "N/A";
  }

  setDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    this.date = `${mm}/${dd}/${yyyy}`;
  }
}

const locationData = new Location();
locationData.setDate();

async function updateLocation(query) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`,
      { mode: "cors" }
    );
    await response.json().then((data) => {
      console.log(data);
      locationData.name = data.location.name;
      locationData.region = data.location.region;
      locationData.country = data.location.country;
      locationData.condition = data.current.condition.text;
      locationData.windDirection = data.current.wind_dir;
      locationData.uv = data.current.uv;
      locationData.humidity = data.current.humidity;
      locationData.icon = data.current.condition.icon;
      if (locationData.celsius === true) {
        locationData.temp = data.current.temp_c;
        locationData.wind = data.current.wind_kph;
        locationData.feelsLike = data.current.feelslike_c;
        locationData.rain = data.current.precip_mm;
      } else {
        locationData.temp = data.current.temp_f;
        locationData.wind = data.current.wind_mph;
        locationData.feelsLike = data.current.feelslike_f;
        locationData.rain = data.current.precip_in;
      }
    });
    console.log(locationData);
    return locationData;
  } catch (err) {
    return err;
  }
}

export { updateLocation, locationData };
