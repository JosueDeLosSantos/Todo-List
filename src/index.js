import * as services from "./services";
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
const addProject = document.querySelector(".addProject");
const fieldset = document.querySelector("fieldset");
const projectCatcher = document.querySelector(".projectCatcher");
const addProjectLink = document.querySelector(".addProjectLink");

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

  const projectList = fieldset.children[10];
  if (projectList.hidden == true) projectList.hidden = false;
}
window.showForm = showForm;
spanCenter3.addEventListener("click", showForm);

let taskRepo = [];

function hideForm(e) {
  main.appendChild(centerDiv);
  main.removeChild(form);

  let title = e.target.parentNode.children[2].value;
  let description = e.target.parentNode.children[4].value;
  let date = e.target.parentNode.children[6].value;
  let priority = e.target.parentNode.children[8].value;
  const projectList = fieldset.children[10].value;

  let task = { title, description, date, priority, projectList };
  taskRepo.push(task);
  console.log(taskRepo);
  addProjectLink.hidden = false;
  projectCatcher.hidden = true;
  if (services.onlyLettersAndNumbers(projectCatcher.value))
    console.log(projectCatcher.value);
}
window.hideForm = hideForm;
button.addEventListener("click", hideForm);

function projectMaker(e) {
  const projectList = e.target.parentNode.parentNode.children[10];
  projectList.hidden = true;
  projectCatcher.hidden = false;
  addProjectLink.hidden = true;
}
window.projectMaker = projectMaker;
addProject.addEventListener("click", projectMaker);
