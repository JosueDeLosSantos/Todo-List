import "../index.css";
import "../form/form.css";
import "../all-tasks/allTasks.css";
import * as services from "../services";

const main = document.querySelector("main");
const taskPresenter = document.querySelector(".taskPresenter");
const resetButton = document.querySelector(".resetButton");
const addButton = document.querySelector(".addButton");

main.removeChild(taskPresenter);
main.removeChild(resetButton);
main.removeChild(addButton);

const oldPR = [];
const objectCatcher = [];
const projects = {};

for (let i = 0; i <= localStorage.length - 1; i += 1) {
  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));
}

for (let i = 0; i <= objectCatcher.length - 1; i += 1) {
  oldPR.push(`${objectCatcher[i].projectList}`);
}

// noDupArray() returns "oldPR" without duplicates.
const projectRepo = services.noDupArray(oldPR);

console.log(projectRepo);
console.log(objectCatcher);

projectRepo.forEach((index) => {
  const tempObjectCatcher = [];
  const tempObjectCatcher2 = [];
  for (let i = 0; i < objectCatcher.length; i++) {
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

  const title = index;
  const completed = tempObjectCatcher.length;
  const incompleted = tempObjectCatcher2.length;
  console.log({ title, completed, incompleted });
});
