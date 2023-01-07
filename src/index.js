import * as services from "./services";
import * as DOM from "./DOM";
import * as dispenser from "./card-dispenser/card-dispenser";
import "./index.css";
import "./form.css";
import pinIcon from "./icons/pin.png";

const nav = document.querySelector("nav");
const logo = document.createElement("div");
logo.classList.add("logo");
const logoText = document.createElement("span");
logoText.classList.add("logoText");
logoText.innerText = "Do i";
const logoIcon = document.createElement("span");
logoIcon.classList.add("logoIcon");
const logoPinIcon = new Image();
logoPinIcon.src = pinIcon;
nav.appendChild(logo);
logo.appendChild(logoText);
logo.appendChild(logoIcon);
logoIcon.appendChild(logoPinIcon);

const ul = document.createElement("ul");
const allTasks = document.createElement("li");
allTasks.classList.add("allTasks");
allTasks.innerText = "All tasks";
const projects = document.createElement("li");
projects.classList.add("projects");
projects.innerText = "Projects";
const priorityCSS = document.createElement("li");
priorityCSS.classList.add("priorityCSS");
priorityCSS.innerText = "Priority";
nav.appendChild(ul);
ul.appendChild(allTasks);
ul.appendChild(projects);
ul.appendChild(priorityCSS);

const main = document.querySelector("main");

const centerDiv = document.createElement("div");
centerDiv.classList.add("centerDiv");
const centerDivT = document.createElement("div");
centerDivT.classList.add("centerDivT");
centerDivT.innerText = "Organize your life with";
const logoCenter = document.createElement("div");
logoCenter.classList.add("logoCenter");
centerDiv.appendChild(centerDivT);
centerDiv.appendChild(logoCenter);
const logoCenterLetters = document.createElement("span");
logoCenterLetters.innerText = "Do i";
logoCenter.appendChild(logoCenterLetters);
const logoCenterIcon = document.createElement("span");
logoCenterIcon.classList.add("logoCenterIcon");
logoCenter.appendChild(logoCenterIcon);
const logoPinIcon2 = new Image();
logoPinIcon2.src = pinIcon;
logoPinIcon2.classList.add("centerPin");
logoCenterIcon.appendChild(logoPinIcon2);
const spanCenter3 = document.createElement("div");
spanCenter3.classList.add("spanCenter3");
const spanCenter3B = document.createElement("button");
spanCenter3B.classList.add("spanCenter3B");
spanCenter3B.innerText = "Add task";
spanCenter3.appendChild(spanCenter3B);
centerDiv.appendChild(spanCenter3);
main.appendChild(centerDiv);

const form = document.querySelector("form");
const button = document.querySelector("button");
const addProject = document.querySelector(".addProject");
const fieldset = document.querySelector("fieldset");
const projectCatcher = document.querySelector(".projectCatcher");
const addProjectLink = document.querySelector(".addProjectLink");
const selectProjectList = document.querySelector(".selectProjectList");

main.removeChild(form);

const oldPR = [];

let objectCatcher = [];
/* localStorage.clear(); */
console.log(localStorage.length);

for (let i = 0; i <= localStorage.length - 1; i += 1) {
  // JSON.parse() converts localStorage JSON items into JS objects
  // Appends each object to objectCatcher
  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
}

// Adds all projectList values to 'oldPR'
for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
  oldPR.push(`${objectCatcher[i].projectList}`);
}

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
  if (main.contains(centerDiv)) {
    main.children[0].replaceWith(form);
  }

  if (main.children[0]) {
    main.children[0].replaceWith(form);
    form.hidden = false;

    const titleInput =
      document.body.children[1].children[0].children[0].children[2];
    const descriptionInput =
      document.body.children[1].children[0].children[0].children[4];
    const dateInput =
      document.body.children[1].children[0].children[0].children[6];
    const priorityInput =
      document.body.children[1].children[0].children[0].children[8];
    titleInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
    projectCatcher.value = "";
  }
  if (main.children[1]) {
    main.removeChild(main.children[1]);
  }

  if (localStorage.length > 0) {
    const titleInput =
      document.body.children[1].children[0].children[0].children[2];
    const descriptionInput =
      document.body.children[1].children[0].children[0].children[4];
    const dateInput =
      document.body.children[1].children[0].children[0].children[6];
    const priorityInput =
      document.body.children[1].children[0].children[0].children[8];
    titleInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
    projectCatcher.value = "";
  }

  const projectList = fieldset.children[10];

  // Cleans all the inputs value

  projectList.value = "All";

  if (projectList.hidden === true) projectList.hidden = false;
}
window.showForm = showForm;
spanCenter3.addEventListener("click", showForm);

const PCchecker = [];

function hideForm(e) {
  if (localStorage.length === 0) {
    main.appendChild(centerDiv);
  }
  form.hidden = true;
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
        /* Saves new added projects into a temporal array called "PCchecker", then
        the project list will be updated temporarily and added to the form,
        when the page reloads "PCchecker" will be cleared but the project list will
        be refilled with the information contained in the "projectRepo" array */
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
    if (localStorage.length === 0) {
      const ID = localStorage.length;
      task = { title, description, date, priority, projectList, checked, ID };
      localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));
    } else {
      const ID = localStorage.length;
      task = { title, description, date, priority, projectList, checked, ID };
      localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));
    }
    main.removeChild(centerDiv);

    // Update objectCatcher
    objectCatcher = [];

    for (let i = 0; i <= localStorage.length - 1; i += 1) {
      objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
    }
    dispenser.showCard(objectCatcher);
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

      if (localStorage.length === 0) {
        const ID = localStorage.length;
        task = { title, description, date, priority, projectList, checked, ID };
        localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));
      } else {
        const ID = localStorage.length;
        task = { title, description, date, priority, projectList, checked, ID };
        localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));
      }
      main.removeChild(centerDiv);
      objectCatcher = [];

      for (let i = 0; i <= localStorage.length - 1; i += 1) {
        objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
      }
      dispenser.showCard(objectCatcher);
      return;
    }

    projectList = projectCatcher.value;
    task = { title, description, date, priority, projectList, checked };

    if (localStorage.length === 0) {
      const ID = localStorage.length;
      task = { title, description, date, priority, projectList, checked, ID };
      localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));
    } else {
      const ID = localStorage.length;
      task = { title, description, date, priority, projectList, checked, ID };
      localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));
    }
    DOM.appendOption(selectProjectList, projectCatcher.value);
    main.removeChild(centerDiv);
    objectCatcher = [];

    for (let i = 0; i <= localStorage.length - 1; i += 1) {
      objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
    }
    dispenser.showCard(objectCatcher);
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
  if (main.children[0].classList.contains("centerDiv")) {
    main.removeChild(centerDiv);
    objectCatcher = [];

    for (let i = 0; i <= localStorage.length - 1; i += 1) {
      objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
    }
    dispenser.showCard(objectCatcher);
  }

  if (main.contains(form)) {
    main.removeChild(form);
    objectCatcher = [];

    for (let i = 0; i <= localStorage.length - 1; i += 1) {
      objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
    }
    dispenser.showCard(objectCatcher);
  }
}
window.showTasks = showTasks;
allTasks.addEventListener("click", showTasks);

logo.addEventListener("click", () => {
  window.location.reload();
});
