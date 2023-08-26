import "normalize.css";
import "./style.css";
import { updateLocation, locationData } from "./modules/weatherapi";

await updateLocation("Cresskill");
console.log(locationData);
