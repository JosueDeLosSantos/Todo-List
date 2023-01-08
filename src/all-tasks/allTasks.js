import "../index.css";
import pinIcon from "../icons/pin.png";
import "../form/form.css";
import chevronIcon from "../icons/chevron.svg";
import "./allTasks.css";
import * as services from "../services";
import * as DOM from "../DOM";

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
projects.innerText = "Projects";
const priorityCSS = document.createElement("li");
priorityCSS.classList.add("priorityCSS");
priorityCSS.innerText = "Priority";
nav.appendChild(ul);
ul.appendChild(allTasks);
ul.appendChild(projects);
ul.appendChild(priorityCSS);

const body = document.querySelector("body");
const main = document.querySelector("main");
const taskPresenter = document.createElement("div");
taskPresenter.classList.add("taskPresenter");
const tPtitle = document.createElement("div");
tPtitle.classList.add("tPtitle");
const h1Alltasks = document.createElement("h1");
h1Alltasks.innerText = "All tasks";
const cardList = document.createElement("div");
cardList.classList.add("cardList");
const addButton = document.createElement("div");
addButton.classList.add("addButton");
addButton.innerText = "+";
addButton.setAttribute("title", "Add new task");

const form = document.querySelector("form");
const formButton = document.querySelector(".formButton");
const addProject = document.querySelector(".addProject");
const fieldset = document.querySelector("fieldset");
const projectCatcher = document.querySelector(".projectCatcher");
const addProjectLink = document.querySelector(".addProjectLink");
const selectProjectList = document.querySelector(".selectProjectList");

const oldPR = [];
const objectCatcher = [];

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

/* function showForm() {
  if (main.contains(centerDiv)) {
    const priority = document.querySelector("#priority");
    priority.value = "";
    main.removeChild(centerDiv);
    form.hidden = false;
  }
}
spanCenter3B.addEventListener("click", showForm); */

if (body.children[1].children[0]) {
  main.removeChild(body.children[1].children[0]);
  main.appendChild(taskPresenter);
  main.appendChild(addButton);
  taskPresenter.appendChild(tPtitle);
  taskPresenter.hidden = false;
  tPtitle.appendChild(h1Alltasks);
  taskPresenter.appendChild(cardList);
}

function addButtonAction() {
  taskPresenter.replaceWith(form);
  form.hidden = false;
  main.removeChild(addButton);
}
addButton.addEventListener("click", addButtonAction);

function checkboxAction(e) {
  const targetNode = e.target.parentNode.parentNode.parentNode.dataset;

  const objectCatcher = [];

  for (let i = 0; i <= localStorage.length - 1; i += 1) {
    // JSON.parse() converts localStorage JSON items into JS objects
    // Appends each object to objectCatcher
    objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
  }

  if (objectCatcher[targetNode.Id].checked === false) {
    objectCatcher[targetNode.Id].checked = true;
    // update localStorage
    localStorage.setItem(
      `${targetNode.Id}`,
      JSON.stringify(objectCatcher[targetNode.Id])
    );
  } else if (objectCatcher[targetNode.Id].checked === true) {
    objectCatcher[targetNode.Id].checked = false;
    // update localStorage
    localStorage.setItem(
      `${targetNode.Id}`,
      JSON.stringify(objectCatcher[targetNode.Id])
    );
  }
}

(function showCard() {
  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
    const cardSection = document.createElement("div");
    cardSection.classList.add("cardSection");
    cardSection.dataset.Id = objectCatcher[i].ID;
    cardSection.dataset.checked = objectCatcher[i].checked;
    cardList.appendChild(cardSection);

    const card = document.createElement("div");
    card.classList.add("card");
    cardSection.appendChild(card);

    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    const checkboxInput = document.createElement("input");
    checkboxInput.classList.add("checkboxInput");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("name", "checkbox");
    checkboxInput.checked = false;
    if (objectCatcher[i].checked === true) checkboxInput.checked = true;
    card.appendChild(checkbox);

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("cardTitle");
    const cardTitleP = document.createElement("p");
    card.appendChild(cardTitle);
    checkbox.appendChild(checkboxInput);
    cardTitle.appendChild(cardTitleP);
    cardTitleP.innerText = `${objectCatcher[i].title}`;

    const cardDate = document.createElement("div");
    cardDate.classList.add("cardDate");
    const cardDateP = document.createElement("p");
    card.appendChild(cardDate);

    const expandButton = document.createElement("div");
    expandButton.classList.add("expandButton");
    const chevronDown = new Image();
    chevronDown.classList.add("chevronDown");
    chevronDown.src = chevronIcon;
    card.appendChild(expandButton);
    expandButton.appendChild(chevronDown);

    const description = document.createElement("div");
    description.classList.add("description");
    description.hidden = true;
    const descriptionT = document.createElement("div");
    descriptionT.classList.add("descriptionT");
    descriptionT.innerText = "description";
    const descriptionB = document.createElement("div");
    descriptionB.classList.add("descriptionB");
    descriptionB.innerText = "";
    cardSection.appendChild(description);
    description.appendChild(descriptionT);
    description.appendChild(descriptionB);
    descriptionB.innerText = `${objectCatcher[i].description}`;

    const edition = document.createElement("div");
    edition.classList.add("edition");
    edition.hidden = true;
    const editButton = document.createElement("button");
    editButton.hidden = true;
    editButton.innerText = "edit";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.hidden = true;
    deleteButton.innerText = "delete";
    cardSection.appendChild(edition);
    edition.appendChild(editButton);
    edition.appendChild(deleteButton);
    cardDate.appendChild(cardDateP);
    cardDateP.innerText = `${objectCatcher[i].date}`;

    const expander = () => {
      if (description.hidden && edition.hidden) {
        description.hidden = false;
        edition.hidden = false;
        editButton.hidden = false;
        deleteButton.hidden = false;
      } else {
        description.hidden = true;
        edition.hidden = true;
        editButton.hidden = true;
        deleteButton.hidden = true;
      }
    };
    expandButton.addEventListener("click", expander);
    checkboxInput.onchange = checkboxAction;
  }
})();
