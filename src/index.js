import "./index.css";
import "./form.css";
import pinIcon from "./icons/pin.png";

const logoIcon = document.querySelector(".logoIcon");
const logoCenterIcon = document.querySelector(".logoCenterIcon");
const logoPinIcon = new Image();
const logoPinIcon2 = new Image();
logoPinIcon.src = pinIcon;
logoPinIcon2.src = pinIcon;
logoIcon.appendChild(logoPinIcon);
logoCenterIcon.appendChild(logoPinIcon2);
const main = document.querySelector("main");
const centerDiv = document.querySelector(".centerDiv");
const form = document.querySelector("form");
const button = document.querySelector("button");
const spanCenter3 = document.querySelector(".spanCenter3");

main.appendChild(centerDiv);
main.removeChild(form);

window.showForm = function () {
  main.removeChild(centerDiv);
  main.appendChild(form);
};

window.hideForm = function () {
  main.appendChild(centerDiv);
  main.removeChild(form);
};

spanCenter3.addEventListener("click", showForm);
button.addEventListener("click", hideForm);
