import * as services from "./services";
import * as DOM from "./DOM";
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
const DOMprojectList = document.querySelector(".DOMprojectList");

main.appendChild(centerDiv);
main.removeChild(form);

function showForm() {
  main.removeChild(centerDiv);
  main.appendChild(form);

  const titleInput =
    document.body.children[1].children[0].children[0].children[2];
  const descriptionInput =
    document.body.children[1].children[0].children[0].children[4];
  const dateInput =
    document.body.children[1].children[0].children[0].children[6];
  const priorityInput =
    document.body.children[1].children[0].children[0].children[8];
  const projectList = fieldset.children[10];

  // Cleans all the inputs value
  titleInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  priorityInput.value = "";
  projectCatcher.value = "";
  projectList.value = "All";

  if (projectList.hidden === true) projectList.hidden = false;
}
window.showForm = showForm;
spanCenter3.addEventListener("click", showForm);

const taskRepo = [];
const projectRepo = ["All"];
let counter = 0;
let tracker = localStorage.getItem("counter");
tracker = +tracker;
for (let i = 0; i <= tracker; i += 1) {
  console.log(localStorage.getItem(`${i}`));
}
console.log(tracker);

function hideForm(e) {
  main.appendChild(centerDiv);
  main.removeChild(form);
  projectCatcher.hidden = true;
  addProjectLink.hidden = false;

  const title = e.target.parentNode.children[2].value;
  const description = e.target.parentNode.children[4].value;
  const date = e.target.parentNode.children[6].value;
  const priority = e.target.parentNode.children[8].value;
  let projectList = fieldset.children[10].value;

  let task = { title, description, date, priority, projectList };

  if (tracker == 0) {
    counter += 1;
    localStorage.setItem("counter", `${counter}`);
    localStorage.setItem(`${counter}`, JSON.stringify(task));
  } else {
    tracker += 1;
    localStorage.setItem("counter", `${tracker}`);
    localStorage.setItem(`${tracker}`, JSON.stringify(task));
  }

  if (!services.onlyLettersAndNumbers(title) && !services.onlyLetters(title)) {
    return;
  }

  if (!services.containsAnyLetters(title)) return;

  if (projectCatcher.value === "") {
    task = { title, description, date, priority, projectList };
    taskRepo.push(task);
    return;
  }

  if (
    services.onlyLetters(projectCatcher.value) ||
    services.onlyLettersAndNumbers(projectCatcher.value)
  ) {
    if (
      // if the project has already been added to projectRepo.
      services.arrWordFinder(projectRepo, projectCatcher.value) ===
      projectCatcher.value
    ) {
      projectList = projectCatcher.value;
      task = { title, description, date, priority, projectList };
      taskRepo.push(task);
      return;
    }

    projectRepo.push(projectCatcher.value);
    projectList = projectCatcher.value;
    DOM.appendOption(DOMprojectList, projectCatcher.value);
  }

  task = { title, description, date, priority, projectList };
  taskRepo.push(task);
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
