import * as services from "./services";
import * as DOM from "./DOM";
import * as dispenser from "./card-dispenser/card-dispenser";
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
export const allTasksCS = document.querySelector(".allTasksCS");
const centerDiv = document.querySelector(".centerDiv");
const form = document.querySelector("form");
const button = document.querySelector("button");
const spanCenter3 = document.querySelector(".spanCenter3");
const addProject = document.querySelector(".addProject");
const fieldset = document.querySelector("fieldset");
const projectCatcher = document.querySelector(".projectCatcher");
const addProjectLink = document.querySelector(".addProjectLink");
const selectProjectList = document.querySelector(".selectProjectList");

main.appendChild(centerDiv);
main.removeChild(form);

const oldPR = [];
let counter = 0;
let tracker = localStorage.getItem("counter");
tracker = +tracker;

const objectCatcher = [];

for (let i = 1; i <= tracker; i += 1) {
  // JSON.parse() converts localStorage JSON items into JS objects
  // Appends each object to objectCatcher
  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
}

// Adds all projectList values to 'oldPR'
objectCatcher.forEach((index) => oldPR.push(`${index.projectList}`));

// Returns "oldPR" without duplicates.
const projectRepo = services.noDupArray(oldPR);

// Appends an "All" default value to selectProjectList if projectRepo is empty
if (projectRepo.length === 0) {
  const optionalValue = document.createElement("option");
  optionalValue.innerText = "All";
  selectProjectList.appendChild(optionalValue);

  // if projectRepo is not empty
} else if (projectRepo.length > 0) {
  // if the value "All" exists on projectRepo
  if (services.arrElementFinder(projectRepo, "All")) {
    // Returns a new array without the value "All"
    const subPrepo = services.arrElementKiller(projectRepo, "All");

    // Appends all elements of subPrepo to selectProjectList
    subPrepo.forEach((index) => DOM.appendOption(selectProjectList, index));
  } else {
    const optionalValue = document.createElement("option");
    optionalValue.innerText = "All";
    selectProjectList.appendChild(optionalValue);

    // Appends all elements of projectRepo to selectProjectList
    projectRepo.forEach((index) => DOM.appendOption(selectProjectList, index));
  }
}

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

console.log(localStorage);

const PCchecker = [];

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
  const checked = false;

  let task = { title, description, date, priority, projectList, checked };

  if (!services.containsAnyLetters(title) && !services.containsNumbers(title)) {
    if (
      services.containsAnyLetters(projectCatcher.value) ||
      services.containsNumbers(projectCatcher.value)
    ) {
      // Avoids projectCatcher.value duplication
      if (projectCatcher.value !== "All") {
        if (services.arrElementFinder(PCchecker, projectCatcher.value)) return;
        PCchecker.push(projectCatcher.value);
        DOM.appendOption(selectProjectList, projectCatcher.value);
      }
    }
    return;
  }

  if (
    !services.containsAnyLetters(projectCatcher.value) &&
    !services.containsNumbers(projectCatcher.value)
  ) {
    if (tracker === 0) {
      counter += 1;
      const ID = counter;
      task = { title, description, date, priority, projectList, checked, ID };
      localStorage.setItem("counter", `${counter}`);
      localStorage.setItem(`${counter}`, JSON.stringify(task));
    } else {
      tracker += 1;
      const ID = tracker;
      task = { title, description, date, priority, projectList, checked, ID };
      localStorage.setItem("counter", `${tracker}`);
      localStorage.setItem(`${tracker}`, JSON.stringify(task));
    }
    main.removeChild(centerDiv);
    dispenser.showCard();
    return;
  }

  if (
    services.containsAnyLetters(projectCatcher.value) ||
    services.containsNumbers(projectCatcher.value)
  ) {
    // if the projectCatcher.value has already been added to projectRepo.
    if (
      services.arrElementFinder(projectRepo, projectCatcher.value) ===
      projectCatcher.value
    ) {
      projectList = projectCatcher.value;
      task = { title, description, date, priority, projectList, checked };

      if (tracker === 0) {
        counter += 1;
        const ID = counter;
        task = { title, description, date, priority, projectList, checked, ID };
        localStorage.setItem("counter", `${counter}`);
        localStorage.setItem(`${counter}`, JSON.stringify(task));
      } else {
        tracker += 1;
        const ID = tracker;
        task = { title, description, date, priority, projectList, checked, ID };
        localStorage.setItem("counter", `${tracker}`);
        localStorage.setItem(`${tracker}`, JSON.stringify(task));
      }
      main.removeChild(centerDiv);
      dispenser.showCard();
      return;
    }

    projectList = projectCatcher.value;
    task = { title, description, date, priority, projectList, checked };

    if (tracker === 0) {
      counter += 1;
      const ID = counter;
      task = { title, description, date, priority, projectList, checked, ID };
      localStorage.setItem("counter", `${counter}`);
      localStorage.setItem(`${counter}`, JSON.stringify(task));
    } else {
      tracker += 1;
      const ID = tracker;
      task = { title, description, date, priority, projectList, checked, ID };
      localStorage.setItem("counter", `${tracker}`);
      localStorage.setItem(`${tracker}`, JSON.stringify(task));
    }
    DOM.appendOption(selectProjectList, projectCatcher.value);
    main.removeChild(centerDiv);
    dispenser.showCard();
  }
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

function showTasks() {
  main.removeChild(centerDiv);

  dispenser.showCard();
}
window.showTasks = showTasks;
allTasksCS.addEventListener("click", showTasks);
