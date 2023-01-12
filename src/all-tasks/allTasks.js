import "../index.css";
import "../form/form.css";
import chevronIcon from "../icons/chevron.svg";
import renew from "../icons/autorenew.svg";
import "./allTasks.css";
import * as services from "../services";

const main = document.querySelector("main");
const taskPresenter = document.createElement("div");
taskPresenter.classList.add("taskPresenter");
const tPtitle = document.createElement("div");
tPtitle.classList.add("tPtitle");
const h1Alltasks = document.createElement("h1");
h1Alltasks.classList.add("h1Alltasks");
h1Alltasks.innerText = "All tasks";
const addButton = document.createElement("div");
addButton.classList.add("addButton");
addButton.innerText = "+";
addButton.setAttribute("title", "Add new task");
const resetButton = document.createElement("div");
resetButton.classList.add("resetButton");
const renewImage = new Image();
renewImage.classList.add("renewImage");
renewImage.src = renew;
resetButton.appendChild(renewImage);
resetButton.setAttribute("title", "clear all");

const centerDiv = document.querySelector(".centerDiv");

const form = document.querySelector("form");
const projectCatcher = document.querySelector(".projectCatcher");
const formPriority = document.querySelector("#priority");
formPriority.value = "";
const fieldset = document.querySelector("fieldset");
const formButton = document.querySelector(".formButton");

// Update screen
centerDiv.replaceWith(taskPresenter);
main.appendChild(addButton);
main.appendChild(resetButton);
taskPresenter.appendChild(tPtitle);
taskPresenter.hidden = false;
tPtitle.appendChild(h1Alltasks);

export function addButtonAction() {
  const redButton = main.children[3];
  const blueButton = main.children[2];
  const targetNode = main.children[1];
  main.removeChild(redButton);
  main.removeChild(blueButton);
  targetNode.replaceWith(form);
  form.hidden = false;
}
addButton.addEventListener("click", addButtonAction);

function resetButtonAction() {
  localStorage.clear();
  window.location.reload();
}
resetButton.addEventListener("click", resetButtonAction);

// Update objectCatcher
const objectCatcher = [];
for (let i = 0; i <= localStorage.length - 1; i += 1) {
  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
}

function checkboxAction(e) {
  const targetNode = e.target.parentNode.parentNode.parentNode.dataset;

  if (objectCatcher[targetNode.Id].checked === false) {
    objectCatcher[targetNode.Id].checked = true;
    // update localStorage
    localStorage.setItem(
      `${targetNode.Id}`,
      JSON.stringify(objectCatcher[targetNode.Id])
    );
    targetNode.checked = true;
  } else if (objectCatcher[targetNode.Id].checked === true) {
    objectCatcher[targetNode.Id].checked = false;
    localStorage.setItem(
      `${targetNode.Id}`,
      JSON.stringify(objectCatcher[targetNode.Id])
    );
    targetNode.checked = false;
  }
}

function deletion(e) {
  const targetNode = e.target.parentNode.parentNode.dataset.Id;

  // remove targetNode immediately
  const container = main.children[1].children[1];
  container.removeChild(e.target.parentNode.parentNode);
  // Update objectCatcher
  objectCatcher.splice(+targetNode, 1);
  // Update objects ID
  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
    objectCatcher[i].ID = `${i}`;
  }
  // Update localStorage
  localStorage.clear();
  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
    localStorage.setItem(`${i}`, JSON.stringify(objectCatcher[i]));
  }
  // Reload page
  window.location.reload();
}

function editAction(e) {
  const targetNode = e.target.parentNode.parentNode.dataset.Id;
  const check = e.target.parentNode.parentNode.dataset.checked;
  form.dataset.edit = true;
  form.dataset.id = targetNode;
  form.dataset.check = check;
  taskPresenter.replaceWith(form);
  form.hidden = false;
  /* I removed main.children[i] instead of "addButton".
  'the "addButton" variable cannot be used in this case, because
  it will trigger errors on other sections like "Projects"' */
  main.removeChild(main.children[2]);
  main.removeChild(main.children[1]);
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

function taskCreator(e) {
  if (e.target.parentNode.parentNode.dataset.edit === "true") {
    const title = e.target.parentNode.children[2].value;
    const description = e.target.parentNode.children[4].value;
    const date = e.target.parentNode.children[6].value;
    const priority = e.target.parentNode.children[8].value;
    let projectList = fieldset.children[10].value;
    let checked = null;
    // Change string value to boolean
    if (e.target.parentNode.parentNode.dataset.check === "false") {
      checked = false;
    } else {
      checked = true;
    }
    const ID = e.target.parentNode.parentNode.dataset.id;

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
        // Update objectCatcher
        objectCatcher.splice(ID, 1, task);
        // Update localStorage
        localStorage.clear();
        for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
          localStorage.setItem(`${i}`, JSON.stringify(objectCatcher[i]));
        }
        // Reload page
        window.location.reload();
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
        // Update objectCather
        objectCatcher.splice(ID, 1, task);
        // Update localStorage
        localStorage.clear();
        for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
          localStorage.setItem(`${i}`, JSON.stringify(objectCatcher[i]));
        }
        // Reload page
        window.location.reload();
      }
    }
  }
}
formButton.addEventListener("click", taskCreator);

// eslint-disable-next-line no-shadow
export function showCard(objectCatcher) {
  // eslint-disable-next-line no-shadow
  const cardList = document.createElement("div");
  cardList.classList.add("cardList");
  taskPresenter.appendChild(cardList);
  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
    // creates card section
    const cardSection = document.createElement("div");
    cardSection.classList.add("cardSection");
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
    descriptionT.innerText = "Description";
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
showCard(objectCatcher);
