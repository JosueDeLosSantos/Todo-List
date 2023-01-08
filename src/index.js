/* import { format } from "prettier"; */
import * as services from "./services";
import * as DOM from "./DOM";
import "./index.css";
import "./form/form.css";
import pinIcon from "./icons/pin.png";

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

export const centerDiv = document.createElement("div");
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

export const main = document.querySelector("main");
const form = document.querySelector("form");
main.appendChild(centerDiv);

function showForm() {
  if (main.contains(centerDiv)) {
    main.removeChild(centerDiv);
    form.hidden = false;
  }
}
spanCenter3B.addEventListener("click", showForm);
