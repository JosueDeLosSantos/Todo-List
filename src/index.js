/* import { format } from "prettier"; */
import * as services from "./services";
import * as DOM from "./DOM";
import "./index.css";
import "./form/form.css";
import pinIcon from "./icons/pin.svg";

const nav = document.querySelector("nav");
const logoA = document.createElement("a");
logoA.setAttribute("href", "index.html");
const logo = document.createElement("div");
logoA.appendChild(logo);
logo.classList.add("logo");
const logoText = document.createElement("span");
logoText.classList.add("logoText");
logoText.innerText = "Do i";
const logoIcon = document.createElement("span");
logoIcon.classList.add("logoIcon");
const logoPinIcon = new Image();
logoPinIcon.src = pinIcon;

logo.appendChild(logoText);
logo.appendChild(logoIcon);
logoIcon.appendChild(logoPinIcon);
nav.appendChild(logoA);

const ul = document.createElement("ul");
const allTasks = document.createElement("li");
allTasks.classList.add("allTasks");
const allTasksA = document.createElement("a");
allTasksA.setAttribute("href", "allTasks.html");
allTasksA.innerText = "All tasks";
allTasks.appendChild(allTasksA);
const projects = document.createElement("li");
projects.classList.add("projects");
const projectsA = document.createElement("a");
projectsA.setAttribute("href", "projects.html");
projectsA.innerText = "Projects";
projects.appendChild(projectsA);
const priorityCSS = document.createElement("li");
priorityCSS.classList.add("priorityCSS");
priorityCSS.innerText = "Priority";
nav.appendChild(ul);
ul.appendChild(allTasks);
ul.appendChild(projects);
ul.appendChild(priorityCSS);

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

const main = document.querySelector("main");

const form = document.querySelector("form");
const formButton = document.querySelector(".formButton");
const addProject = document.querySelector(".addProject");
const fieldset = document.querySelector("fieldset");
const projectCatcher = document.querySelector(".projectCatcher");
const addProjectLink = document.querySelector(".addProjectLink");
const selectProjectList = document.querySelector(".selectProjectList");

main.appendChild(centerDiv);
/* localStorage.clear(); */

const oldPR = [];
const objectCatcher = [];

// Loops through "localStorage"
for (let i = 0; i <= localStorage.length - 1; i += 1) {
  // JSON.parse() converts localStorage JSON items into JS objects
  // Appends each object to objectCatcher
  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
}

// Adds all projectList values to 'oldPR'
for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
  oldPR.push(`${objectCatcher[i].projectList}`);
}

// noDupArray() returns "oldPR" without duplicates.
const projectRepo = services.noDupArray(oldPR);

if (projectRepo.length > 0) {
  // arrElementKiller() returns a new array without the value "All"
  const subPrepo = services.arrElementKiller(projectRepo, "All");
  // Appends all elements of subPrepo to selectProjectList
  subPrepo.forEach((index) => DOM.appendOption(selectProjectList, index));
}

function taskCreator(e) {
  if (form.dataset.edit === "false") {
    const title = e.target.parentNode.children[2].value;
    const description = e.target.parentNode.children[4].value;
    const date = e.target.parentNode.children[6].value;
    const priority = e.target.parentNode.children[8].value;
    let projectList = fieldset.children[10].value;
    const checked = false;

    // Makes sure that tasks title contains any letter or number
    if (services.containsLetters(title) || services.containsNumbers(title)) {
      // Makes sure that projectCatcher contains letters or numbers
      if (
        services.containsLetters(projectCatcher.value) ||
        services.containsNumbers(projectCatcher.value)
      ) {
        projectList = projectCatcher.value;
        let task = { title, description, date, priority, projectList, checked };
        const ID = localStorage.length;
        // Adds new projects to 'localStorage'.
        task = { title, description, date, priority, projectList, checked, ID };
        localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));
        return;
      }
      // Makes sure that projectCatcher does not contain letters or numbers
      if (
        !services.containsLetters(projectCatcher.value) ||
        !services.containsNumbers(projectCatcher.value)
      ) {
        let task = { title, description, date, priority, projectList, checked };
        const ID = localStorage.length;
        task = { title, description, date, priority, projectList, checked, ID };
        localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));
        e.stopPropagation();
      }
    }
  }
}
formButton.addEventListener("click", taskCreator);

// Uncovers a new input inside the form to add new projects
function projectMaker(e) {
  const projectList = e.target.parentNode.parentNode.children[10];
  addProjectLink.hidden = true;
  projectList.value = "";
  projectCatcher.hidden = false;
}
window.projectMaker = projectMaker;
addProject.addEventListener("click", projectMaker);
/* Hides the "add project" option of the form when a project from 
the project list is selected. */
function hideProjectMaker() {
  addProjectLink.hidden = false;
  projectCatcher.hidden = true;
  projectCatcher.value = "";
}
selectProjectList.addEventListener("click", hideProjectMaker);

function showForm() {
  console.log(form);
  if (main.contains(centerDiv)) {
    main.removeChild(centerDiv);
    main.appendChild(form);
    form.hidden = false;
    const priority = document.querySelector("#priority");
    priority.value = "";
  }
}
spanCenter3B.addEventListener("click", showForm);
