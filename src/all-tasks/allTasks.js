import "../index.css";
import "../form/form.css";
import chevronIcon from "../icons/chevron.svg";
import "./allTasks.css";

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

const centerDiv = document.querySelector(".centerDiv");
const form = document.querySelector("form");

const formPriority = document.querySelector("#priority");
formPriority.value = "";
const formButton = document.querySelector(".formButton");

// Update screen
centerDiv.replaceWith(taskPresenter);
main.appendChild(addButton);
taskPresenter.appendChild(tPtitle);
taskPresenter.hidden = false;
tPtitle.appendChild(h1Alltasks);
taskPresenter.appendChild(cardList);

function addButtonAction() {
  taskPresenter.replaceWith(form);
  form.hidden = false;
  main.removeChild(addButton);
}
addButton.addEventListener("click", addButtonAction);

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
  } else if (objectCatcher[targetNode.Id].checked === true) {
    objectCatcher[targetNode.Id].checked = false;
    localStorage.setItem(
      `${targetNode.Id}`,
      JSON.stringify(objectCatcher[targetNode.Id])
    );
  }
}

function deletion(e) {
  const targetNode = e.target.parentNode.parentNode.dataset.Id;
  // remove targetNode immediately
  cardList.removeChild(e.target.parentNode.parentNode);
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
  console.log(objectCatcher[targetNode]);
  form.dataset.edit = true;
  console.log(form);
  taskPresenter.replaceWith(form);
  form.hidden = false;
  main.removeChild(addButton);
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
    console.log("yes");
    e.preventDefault();
  }
}
formButton.addEventListener("click", taskCreator);

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
    deleteButton.onclick = deletion;
    editButton.onclick = editAction;
  }
})();
