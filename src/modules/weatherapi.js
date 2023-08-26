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
    feelsLike
  ) {
    this.name = name;
    this.region = region;
    this.country = country;
    this.temp = temp;
    this.condition = condition;
    this.wind = wind;
    this.windDirection = windDirection;
    this.uv = uv;
    this.feelsLike = feelsLike;
    this.celsius = false;
  }
}

const locationData = new Location();

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
      if (locationData.celsius === true) {
        locationData.temp = data.current.temp_c;
        locationData.wind = data.current.wind_kph;
        locationData.feelsLike = data.current.feelslike_c;
      } else {
        locationData.temp = data.current.temp_f;
        locationData.wind = data.current.wind_mph;
        locationData.feelsLike = data.current.feelslike_f;
      }
    });
    return locationData;
  } catch (err) {
    return err;
  }
}

export { updateLocation, locationData };
