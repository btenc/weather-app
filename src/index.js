import "normalize.css";
import "./style.css";
import updateDisplay from "./modules/interface";
import dropDownInit from "./modules/drop-down";

dropDownInit("dropdown-button", "dropdown-content-container", "hidden");
updateDisplay("Rome");
