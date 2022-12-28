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

function showForm() {
  main.removeChild(centerDiv);
  main.appendChild(form);

  let titleInput =
    document.body.children[1].children[0].children[0].children[2];
  let descriptionInput =
    document.body.children[1].children[0].children[0].children[4];
  let dateInput = document.body.children[1].children[0].children[0].children[6];
  let priorityInput =
    document.body.children[1].children[0].children[0].children[8];

  titleInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  priorityInput.value = "";
}
window.showForm = showForm;

let taskRepo = [];

function hideForm(e) {
  main.appendChild(centerDiv);
  main.removeChild(form);

  let title = e.target.parentNode.children[2].value;
  let description = e.target.parentNode.children[4].value;
  let date = e.target.parentNode.children[6].value;
  let priority = e.target.parentNode.children[8].value;

  let task = { title, description, date, priority };
  taskRepo.push(task);
  console.log(taskRepo);
}
window.hideForm = hideForm;

spanCenter3.addEventListener("click", showForm);
button.addEventListener("click", hideForm);
