import * as mainIndex from "../index";
import chevronIcon from "../icons/chevron.svg";
import "./card-dispenser.css";

const allTasksCS = document.querySelector(".allTasksCS");

const main = document.querySelector("main");
const taskPresenter = document.createElement("div");
taskPresenter.classList.add("taskPresenter");
const tPtitle = document.createElement("div");
tPtitle.classList.add("tPtitle");
const h1Alltasks = document.createElement("h1");
h1Alltasks.innerText = "All tasks";
const cardList = document.createElement("div");
cardList.classList.add("cardList");

const objectCatcher = [];
let tracker = localStorage.getItem("counter");
tracker = +tracker;

for (let i = 1; i <= tracker; i += 1) {
  // JSON.parse() converts localStorage JSON items into JS objects
  // Appends each object to objectCatcher
  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
}

export function showCard() {
  main.appendChild(taskPresenter);
  taskPresenter.appendChild(tPtitle);
  tPtitle.appendChild(h1Alltasks);
  taskPresenter.appendChild(cardList);

  objectCatcher.forEach((index) => {
    const cardSection = document.createElement("div");
    cardSection.classList.add("cardSection");
    cardList.appendChild(cardSection);

    const card = document.createElement("div");
    card.classList.add("card");
    cardSection.appendChild(card);

    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("name", "checkbox");
    checkboxInput.checked = false;
    card.appendChild(checkbox);

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("cardTitle");
    const cardTitleP = document.createElement("p");
    card.appendChild(cardTitle);
    checkbox.appendChild(checkboxInput);
    cardTitle.appendChild(cardTitleP);
    cardTitleP.innerText = `${index.title}`;

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
    const descriptionT = document.createElement("p");
    descriptionT.innerText = "description";
    const descriptionB = document.createElement("p");
    descriptionB.innerText = "";
    cardSection.appendChild(description);
    description.appendChild(descriptionT);
    description.appendChild(descriptionB);
    descriptionB.innerText = `${index.description}`;

    const edition = document.createElement("div");
    edition.classList.add("edition");
    edition.hidden = true;
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    cardSection.appendChild(edition);
    edition.appendChild(editButton);
    edition.appendChild(deleteButton);
    cardDate.appendChild(cardDateP);
    cardDateP.innerText = `${index.date}`;

    function expander() {
      if (description.hidden && edition.hidden) {
        description.hidden = false;
        edition.hidden = false;
      } else {
        description.hidden = true;
        edition.hidden = true;
      }
    }
    window.expander = expander;
    expandButton.addEventListener("click", expander);
  });
}

/* function refresh() {
  main.reload();
}
window.refresh = refresh;

allTasksCS.addEventListener("click", refresh); */
