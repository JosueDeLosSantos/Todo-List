import "../index.css";
import "../form.css";
import pinIcon from "../icons/pin.png";

const logoIcon = document.querySelector(".logoIcon");
const logoPinIcon = new Image();
logoPinIcon.src = pinIcon;
logoIcon.appendChild(logoPinIcon);

export function addMessage() {
  const div = document.createElement("div");
  div.innerText = "yes, this is an example";
  const main = document.querySelector("main");
  main.appendChild(div);
}
