import "../index.css";
import "../form/form.css";
import chevronIcon from "../icons/chevron.svg";
import renew from "../icons/autorenew.svg";
import renew2 from "../icons/folder_delete.svg";
import "./allTasks.css";
import * as services from "../services";
import * as DOM from "../DOM";
// eslint-disable-next-line import/no-cycle
import * as projectSect2 from "../projects/projects";
// eslint-disable-next-line import/no-cycle
import * as index from "../index";

/* const body = document.querySelector("body"); */
const main = document.querySelector("main");

const addButton = document.querySelector(".addButton");
const resetButton = document.querySelector(".resetButton");
const renewImage = document.querySelector(".renewImage");
// renewImage.classList.add("renew");
renewImage.setAttribute("title", "clear all");
renewImage.src = renew;
resetButton.appendChild(renewImage);

const form = document.querySelector("form");
const projectCatcher = document.querySelector(".projectCatcher");
const formPriority = document.querySelector("#priority");
formPriority.value = "";
const fieldset = document.querySelector("fieldset");
const formButton = document.querySelector(".formButton");
const addProjectLink = document.querySelector(".addProjectLink");
const newProjectCatcher = document.querySelector(".projectCatcher");
const selectProjectList = document.querySelector(".selectProjectList");

function checkboxAction(e) {
  const objectCatcher = [];

  for (let i = 0; i <= localStorage.length - 1; i += 1) {
    objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
  }

  const targetNode = e.target.parentNode.parentNode.parentNode.dataset;

  if (objectCatcher[targetNode.Id].checked === "false") {
    objectCatcher[targetNode.Id].checked = "true";
    // update localStorage
    localStorage.setItem(
      `${targetNode.Id}`,
      JSON.stringify(objectCatcher[targetNode.Id])
    );
    targetNode.checked = true;
  } else {
    objectCatcher[targetNode.Id].checked = "false";

    localStorage.setItem(
      `${targetNode.Id}`,
      JSON.stringify(objectCatcher[targetNode.Id])
    );
    targetNode.checked = false;
  }
}

function deletion(e) {
  const objectCatcher = [];

  // Loops through "localStorage"
  for (let i = 0; i <= localStorage.length - 1; i += 1) {
    // JSON.parse() converts localStorage JSON items into JS objects
    // Appends each object to objectCatcher
    objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
  }

  const target = e.target.parentNode.parentNode.dataset.Id;

  // remove targetNode immediately
  const container = e.target.parentNode.parentNode.parentNode;
  container.removeChild(e.target.parentNode.parentNode);
  // Update objectCatcher
  objectCatcher.splice(+target, 1);
  // Update objects ID
  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
    objectCatcher[i].ID = `${i}`;
  }
  // Update localStorage
  localStorage.clear();
  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
    localStorage.setItem(`${i}`, JSON.stringify(objectCatcher[i]));
  }
}

function editAction(e) {
  index.oldPRaction();
  index.optionAppender();

  const objectCatcher = [];

  // Loops through "localStorage"
  for (let i = 0; i <= localStorage.length - 1; i += 1) {
    // JSON.parse() converts localStorage JSON items into JS objects
    // Appends each object to objectCatcher
    objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
  }

  const targetNode = e.target.parentNode.parentNode.dataset.Id;
  const check = e.target.parentNode.parentNode.dataset.checked;
  form.dataset.edit = true;
  form.dataset.id = targetNode;
  // eslint-disable-next-line consistent-return
  form.dataset.check = check;

  const taskPresenter = document.querySelector(".taskPresenter");
  main.removeChild(taskPresenter);
  form.hidden = false;

  addButton.hidden = true;
  resetButton.hidden = true;
  const title = form.children[0].children[2];
  const description = form.children[0].children[4];
  const date = form.children[0].children[6];
  const priority = form.children[0].children[8];
  const project = form.children[0].children[10];

  title.value = objectCatcher[targetNode].title;
  description.value = objectCatcher[targetNode].description;
  date.value = objectCatcher[targetNode].date;
  priority.value = objectCatcher[targetNode].priority;
  project.value = objectCatcher[targetNode].projectList;
}

// eslint-disable-next-line no-shadow
export function showCard() {
  if (localStorage.length > 8) {
    main.setAttribute("style", "height: 100%;");
  } else if (localStorage.length <= 8) {
    main.setAttribute("style", "height: 100vh;");
  }

  // Update objectCatcher
  let objectCatcher = [];
  for (let i = 0; i <= localStorage.length - 1; i += 1) {
    objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
  }

  const taskPresenter = document.createElement("div");
  taskPresenter.classList.add("taskPresenter");
  const tPtitle = document.createElement("div");
  tPtitle.classList.add("tPtitle");
  const h1Alltasks = document.createElement("h1");
  h1Alltasks.classList.add("h1Alltasks");
  h1Alltasks.innerText = "All tasks";

  if (addButton.hidden === true) {
    addButton.hidden = false;
  }

  const projectsA = document.querySelector(".projectsA");

  if (projectsA.dataset.project) {
    objectCatcher = projectSect2.projectCards(projectsA.dataset.project);
    h1Alltasks.innerText = `${projectsA.dataset.project}`;
    renewImage.src = renew2;
    renewImage.setAttribute("title", "empty project");
    // renewImage.classList.remove("renew");
    // renewImage.classList.add("renew2");
    if (addButton.hidden === true) addButton.hidden = false;
  } else {
    renewImage.src = renew;
    renewImage.setAttribute("title", "clear all");
  }

  if (form.hidden === false) {
    form.hidden = true;
  }

  if (main.children[3]) {
    if (main.children[3].classList.contains("projectsPresenter")) {
      main.removeChild(main.children[3]);
      main.appendChild(taskPresenter);
      h1Alltasks.innerText = `${projectsA.dataset.project}`;
    }
  } else {
    main.appendChild(taskPresenter);
  }

  resetButton.hidden = false;
  taskPresenter.appendChild(tPtitle);
  tPtitle.appendChild(h1Alltasks);

  // eslint-disable-next-line no-shadow
  const cardList = document.createElement("div");
  cardList.classList.add("cardList");
  taskPresenter.appendChild(cardList);

  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
    // creates card section
    const cardSection = document.createElement("div");
    cardSection.classList.add("cardSection");
    if (objectCatcher[i].priority === "low") {
      cardSection.classList.add("green");
    }
    if (objectCatcher[i].priority === "medium") {
      cardSection.classList.add("yellow");
    }
    if (objectCatcher[i].priority === "high") {
      cardSection.classList.add("red");
    }
    // adds data attributes to cardsection
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

    if (objectCatcher[i].checked === "true") {
      checkboxInput.checked = true;
    } else {
      checkboxInput.checked = false;
    }

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
    const descriptionB = document.createElement("div");
    descriptionB.classList.add("descriptionB");
    descriptionB.innerText = "";
    cardSection.appendChild(description);
    description.appendChild(descriptionB);
    descriptionB.innerText = `${objectCatcher[i].description}`;

    const edition = document.createElement("div");
    edition.classList.add("edition");
    edition.hidden = true;
    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.hidden = true;
    editButton.innerText = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.hidden = true;
    deleteButton.innerText = "Delete";
    cardSection.appendChild(edition);
    edition.appendChild(editButton);
    edition.appendChild(deleteButton);
    cardDate.appendChild(cardDateP);
    cardDateP.innerText = `${objectCatcher[i].date}`;

    addProjectLink.hidden = false;
    newProjectCatcher.hidden = true;

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
    deleteButton.onclick = deletion;
    editButton.onclick = editAction;
  }
}

function addButtonAction() {
  addButton.hidden = true;
  resetButton.hidden = true;

  // remove old "taskPresenter" if there is one
  if (main.children[3]) main.removeChild(main.children[3]);
  // update dataset 'edit' if needed
  if (form.dataset.edit === "true") form.dataset.edit = "false";

  form.hidden = false;
  form.dataset.section = "All";
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  const priority = document.querySelector("#priority");
  const projectList = document.querySelector("#project");

  title.value = "";
  description.value = "";
  date.value = "";
  priority.value = "";
  projectList.value = "All";
  newProjectCatcher.value = "";

  addProjectLink.hidden = false;
  newProjectCatcher.hidden = true;

  // reset selectProjectList
  while (selectProjectList.children[1]) {
    selectProjectList.removeChild(selectProjectList.children[1]);
  }

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
}
addButton.addEventListener("click", addButtonAction);

function resetButtonAction() {
  const projectsA = document.querySelector(".projectsA");
  if (projectsA.dataset.project) {
    projectSect2.deleteProject();
    return;
  }

  // Clear local storage
  localStorage.clear();

  if (main.children[3]) main.removeChild(main.children[3]);

  showCard();
}
resetButton.addEventListener("click", resetButtonAction);

function taskCreator(e) {
  e.preventDefault();

  if (form.dataset.edit === "false") {
    const title = e.target.parentNode.children[2].value;
    const description = e.target.parentNode.children[4].value;
    const date = e.target.parentNode.children[6].value;
    const priority = e.target.parentNode.children[8].value;
    let projectList = fieldset.children[10].value;
    const checked = "false";

    // Makes sure that tasks title contains any letter or number
    if (services.containsLetters(title) || services.containsNumbers(title)) {
      // Makes sure that projectCatcher contains letters or numbers
      if (
        services.containsLetters(projectCatcher.value) ||
        services.containsNumbers(projectCatcher.value)
      ) {
        projectList = projectCatcher.value;
        let task = {
          title,
          description,
          date,
          priority,
          projectList,
          checked,
        };
        const ID = localStorage.length;
        // Adds new projects to 'localStorage'.
        task = {
          title,
          description,
          date,
          priority,
          projectList,
          checked,
          ID,
        };
        localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));

        if (localStorage.length > 8) {
          main.setAttribute("style", "height: 100%;");
        } else if (localStorage.length <= 8) {
          main.setAttribute("style", "height: 100vh;");
        }

        const projectsA2 = document.querySelector(".projectsA");
        if (projectsA2) {
          index.showProjects();
          return;
        }

        showCard();
        return;
      }
      // Makes sure that projectCatcher does not contain letters or numbers
      if (
        !services.containsLetters(projectCatcher.value) ||
        !services.containsNumbers(projectCatcher.value)
      ) {
        let task = {
          title,
          description,
          date,
          priority,
          projectList,
          checked,
        };
        const ID = localStorage.length;
        task = {
          title,
          description,
          date,
          priority,
          projectList,
          checked,
          ID,
        };
        localStorage.setItem(`${localStorage.length}`, JSON.stringify(task));

        if (localStorage.length > 8) {
          main.setAttribute("style", "height: 100%;");
        } else if (localStorage.length <= 8) {
          main.setAttribute("style", "height: 100vh;");
        }

        const projectsA2 = document.querySelector(".projectsA");
        if (projectsA2) {
          index.showProjects();
          return;
        }

        showCard();
      }
    }
  }

  if (form.dataset.edit === "true") {
    const title = e.target.parentNode.children[2].value;
    const description = e.target.parentNode.children[4].value;
    const date = e.target.parentNode.children[6].value;
    const priority = e.target.parentNode.children[8].value;
    let projectList = fieldset.children[10].value;
    const ID = form.dataset.id;
    const checked = form.dataset.check;

    // Makes sure that tasks title contains any letter or number
    if (services.containsLetters(title) || services.containsNumbers(title)) {
      // Makes sure that projectCatcher contains letters or numbers
      if (
        services.containsLetters(projectCatcher.value) ||
        services.containsNumbers(projectCatcher.value)
      ) {
        projectList = projectCatcher.value;
        const task = {
          title,
          description,
          date,
          priority,
          projectList,
          checked,
          ID,
        };

        localStorage.setItem(`${ID}`, JSON.stringify(task));

        if (localStorage.length > 8) {
          main.setAttribute("style", "height: 100%;");
        } else if (localStorage.length <= 8) {
          main.setAttribute("style", "height: 100vh;");
        }

        showCard();
        return;
      }
      // Makes sure that projectCatcher does not contain letters or numbers
      if (
        !services.containsLetters(projectCatcher.value) ||
        !services.containsNumbers(projectCatcher.value)
      ) {
        const task = {
          title,
          description,
          date,
          priority,
          projectList,
          checked,
          ID,
        };
        localStorage.setItem(`${ID}`, JSON.stringify(task));

        if (localStorage.length > 8) {
          main.setAttribute("style", "height: 100%;");
        } else if (localStorage.length <= 8) {
          main.setAttribute("style", "height: 100vh;");
        }

        showCard();
      }
    }
  }
}
formButton.addEventListener("click", taskCreator);
