import "../index.css";
import "../form/form.css";
import "../all-tasks/allTasks.css";
import "./projects.css";
import folderDelete from "../icons/folder_delete.svg";
import * as services from "../services";
import * as tasks from "../all-tasks/allTasks";

const main = document.querySelector("main");
const taskPresenter = document.querySelector(".taskPresenter");
const h1Alltasks = document.querySelector(".h1Alltasks");
const cardList = document.querySelector(".cardList");
cardList.classList.add("cardList");
const resetButton = document.querySelector(".resetButton");
const addButton = document.querySelector(".addButton");

main.removeChild(taskPresenter);
main.removeChild(resetButton);
main.removeChild(addButton);

const oldPR = [];
const objectCatcher = [];

for (let i = 0; i <= localStorage.length - 1; i += 1) {
  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
}

for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
  oldPR.push(`${objectCatcher[i].projectList}`);
}

// noDupArray() returns "oldPR" without duplicates.
const projectRepo = services.noDupArray(oldPR);

const projects = [];

/* go through each project name */
projectRepo.forEach((index) => {
  const tempObjectCatcher = [];
  const tempObjectCatcher2 = [];
  for (let i = 0; i < objectCatcher.length; i++) {
    /* compares each project name with each element.projectList
    from objectCatcher and checks if elements have been marked */
    if (
      index === objectCatcher[i].projectList &&
      objectCatcher[i].checked === true
    ) {
      tempObjectCatcher.push(objectCatcher[i]);
    }
    if (
      index === objectCatcher[i].projectList &&
      objectCatcher[i].checked === false
    ) {
      tempObjectCatcher2.push(objectCatcher[i]);
    }
  }
  /* Creates new object containing the name of the project,
  number of completed tasks and number of incompleted tasks and */
  const title = index;
  const done = tempObjectCatcher.length;
  const pending = tempObjectCatcher2.length;
  const task = { title, done, pending };
  projects.push(task);
});

/* Capture only the taks with the project name 'pam' and 
saves them on tempArray. this function returns tasks that belong
to a specific project. */
function projectCards(pam) {
  const tempArray = [];
  for (let i = 0; i < objectCatcher.length; i++) {
    if (pam === objectCatcher[i].projectList) {
      tempArray.push(objectCatcher[i]);
    }
  }
  return tempArray;
}

const projectsPresenter = document.createElement("div");
projectsPresenter.classList.add("projectsPresenter");
const pPtitle = document.createElement("div");
pPtitle.classList.add("pPtitle");
const h1Projects = document.createElement("h1");
h1Projects.innerText = "Projects";
const projectList = document.createElement("div");
projectList.classList.add("projectList");

function addButtonAction() {
  const form = document.querySelector("form");
  if (main.children[3]) {
    tasks.addButtonAction();
    return;
  }
  const targetNode = main.children[1];
  const blueButton = main.children[2];
  main.removeChild(blueButton);
  targetNode.replaceWith(form);
  form.hidden = false;
}

function deleteProject(e) {
  const projectName =
    e.target.parentNode.parentNode.children[1].children[0].children[0]
      .innerText;

  for (let i = 0; i < objectCatcher.length; i++) {
    // Spot all elements that contain "projectName"
    if (projectName === objectCatcher[i].projectList) {
      // delete found elements from objectCatcher
      delete objectCatcher[i];
    }
  }
  // remove all empty holes from objectCatcher and asing new value to tempArray
  const tempArray = objectCatcher.filter((element) => element != null);
  // update elements IDs
  for (let i = 0; i < tempArray.length; i++) {
    tempArray[i].ID = i;
  }
  // Update localStorage
  localStorage.clear();
  for (let i = 0; i < tempArray.length; i += 1) {
    localStorage.setItem(`${i}`, JSON.stringify(tempArray[i]));
  }
  // Reload page
  window.location.reload();
}
const newAddButton = document.createElement("div");
newAddButton.classList.add("addButton");
newAddButton.innerText = "+";
newAddButton.setAttribute("title", "Add new task");
newAddButton.onclick = addButtonAction;
const newResetButton = document.createElement("div");
newResetButton.classList.add("resetButton");
const fdImage = new Image();
fdImage.classList.add("fdImage");
fdImage.src = folderDelete;
newResetButton.appendChild(fdImage);
newResetButton.setAttribute("title", "Delete project");
newResetButton.onclick = deleteProject;

main.appendChild(projectsPresenter);
projectsPresenter.appendChild(pPtitle);
pPtitle.appendChild(h1Projects);
projectsPresenter.appendChild(projectList);
main.appendChild(newAddButton);

projects.forEach((index) => {
  const projectSection = document.createElement("div");
  projectSection.classList.add("projectSection");
  const projectSectionT = document.createElement("div");
  projectSectionT.classList.add("projectSectionT");
  projectSectionT.innerText = `${index.title}`;
  projectSection.appendChild(projectSectionT);
  const PSdata = document.createElement("div");
  PSdata.classList.add("PSdata");
  projectSection.appendChild(PSdata);
  const done = document.createElement("div");
  done.classList.add("done");
  const doneT = document.createElement("div");
  doneT.innerText = "done:";
  const doneD = document.createElement("div");
  doneD.innerText = `${index.done}`;
  const pending = document.createElement("div");
  pending.classList.add("pending");
  const pendingT = document.createElement("div");
  pendingT.innerText = "pending:";
  const pendingD = document.createElement("div");
  pendingD.innerText = `${index.pending}`;
  PSdata.appendChild(done);
  done.appendChild(doneT);
  done.appendChild(doneD);
  PSdata.appendChild(pending);
  pending.appendChild(pendingT);
  pending.appendChild(pendingD);

  projectList.appendChild(projectSection);

  const projectsContent = () => {
    const projectName = projectSection.children[0].innerText;
    projectsPresenter.replaceWith(taskPresenter);
    h1Alltasks.innerText = `${projectName}`;
    taskPresenter.removeChild(cardList);
    main.appendChild(newResetButton);

    // Show only the cards of the project selected
    tasks.showCard(projectCards(projectName));
  };
  projectSection.onclick = projectsContent;
});
