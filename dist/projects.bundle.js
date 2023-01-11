/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects/projects.js":
/*!**********************************!*\
  !*** ./src/projects/projects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.css */ \"./src/index.css\");\n/* harmony import */ var _form_form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/form.css */ \"./src/form/form.css\");\n/* harmony import */ var _icons_chevron_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/chevron.svg */ \"./src/icons/chevron.svg\");\n/* harmony import */ var _icons_autorenew_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/autorenew.svg */ \"./src/icons/autorenew.svg\");\n/* harmony import */ var _all_tasks_allTasks_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../all-tasks/allTasks.css */ \"./src/all-tasks/allTasks.css\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ \"./src/services.js\");\n\n\n\n\n\n\n\nconst main = document.querySelector(\"main\");\nconst taskPresenter = document.createElement(\"div\");\ntaskPresenter.classList.add(\"taskPresenter\");\nconst tPtitle = document.createElement(\"div\");\ntPtitle.classList.add(\"tPtitle\");\nconst h1Alltasks = document.createElement(\"h1\");\nh1Alltasks.innerText = \"All tasks\";\nconst cardList = document.createElement(\"div\");\ncardList.classList.add(\"cardList\");\nconst addButton = document.createElement(\"div\");\naddButton.classList.add(\"addButton\");\naddButton.innerText = \"+\";\naddButton.setAttribute(\"title\", \"Add new task\");\nconst resetButton = document.createElement(\"div\");\nresetButton.classList.add(\"resetButton\");\nconst renewImage = new Image();\nrenewImage.classList.add(\"renewImage\");\nrenewImage.src = _icons_autorenew_svg__WEBPACK_IMPORTED_MODULE_3__;\nresetButton.appendChild(renewImage);\nresetButton.setAttribute(\"title\", \"clear all\");\n\nconst centerDiv = document.querySelector(\".centerDiv\");\n\nconst form = document.querySelector(\"form\");\nconst projectCatcher = document.querySelector(\".projectCatcher\");\nconst formPriority = document.querySelector(\"#priority\");\nformPriority.value = \"\";\nconst fieldset = document.querySelector(\"fieldset\");\nconst formButton = document.querySelector(\".formButton\");\n\n// Update screen\ncenterDiv.replaceWith(taskPresenter);\nmain.appendChild(addButton);\nmain.appendChild(resetButton);\ntaskPresenter.appendChild(tPtitle);\ntaskPresenter.hidden = false;\ntPtitle.appendChild(h1Alltasks);\ntaskPresenter.appendChild(cardList);\n\nfunction addButtonAction() {\n  taskPresenter.replaceWith(form);\n  form.hidden = false;\n  main.removeChild(addButton);\n  main.removeChild(resetButton);\n}\naddButton.addEventListener(\"click\", addButtonAction);\n\nfunction resetButtonAction() {\n  localStorage.clear();\n  window.location.reload();\n}\nresetButton.addEventListener(\"click\", resetButtonAction);\n\n// Update objectCatcher\nconst objectCatcher = [];\nfor (let i = 0; i <= localStorage.length - 1; i += 1) {\n  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));\n}\n\nfunction checkboxAction(e) {\n  const targetNode = e.target.parentNode.parentNode.parentNode.dataset;\n\n  if (objectCatcher[targetNode.Id].checked === false) {\n    objectCatcher[targetNode.Id].checked = true;\n    // update localStorage\n    localStorage.setItem(\n      `${targetNode.Id}`,\n      JSON.stringify(objectCatcher[targetNode.Id])\n    );\n    targetNode.checked = true;\n  } else if (objectCatcher[targetNode.Id].checked === true) {\n    objectCatcher[targetNode.Id].checked = false;\n    localStorage.setItem(\n      `${targetNode.Id}`,\n      JSON.stringify(objectCatcher[targetNode.Id])\n    );\n    targetNode.checked = false;\n  }\n}\n\nfunction deletion(e) {\n  const targetNode = e.target.parentNode.parentNode.dataset.Id;\n  // remove targetNode immediately\n  cardList.removeChild(e.target.parentNode.parentNode);\n  // Update objectCatcher\n  objectCatcher.splice(+targetNode, 1);\n  // Update objects ID\n  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {\n    objectCatcher[i].ID = `${i}`;\n  }\n  // Update localStorage\n  localStorage.clear();\n  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {\n    localStorage.setItem(`${i}`, JSON.stringify(objectCatcher[i]));\n  }\n  // Reload page\n  window.location.reload();\n}\n\nfunction editAction(e) {\n  const targetNode = e.target.parentNode.parentNode.dataset.Id;\n  const check = e.target.parentNode.parentNode.dataset.checked;\n  form.dataset.edit = true;\n  form.dataset.id = targetNode;\n  form.dataset.check = check;\n  taskPresenter.replaceWith(form);\n  form.hidden = false;\n  main.removeChild(addButton);\n  main.removeChild(resetButton);\n  const title = form.children[0].children[2];\n  const description = form.children[0].children[4];\n  const date = form.children[0].children[6];\n  const priority = form.children[0].children[8];\n  const project = form.children[0].children[10];\n\n  title.value = objectCatcher[targetNode].title;\n  description.value = objectCatcher[targetNode].description;\n  date.value = objectCatcher[targetNode].date;\n  priority.value = objectCatcher[targetNode].priority;\n  project.value = objectCatcher[targetNode].projectList;\n}\n\nfunction taskCreator(e) {\n  if (e.target.parentNode.parentNode.dataset.edit === \"true\") {\n    const title = e.target.parentNode.children[2].value;\n    const description = e.target.parentNode.children[4].value;\n    const date = e.target.parentNode.children[6].value;\n    const priority = e.target.parentNode.children[8].value;\n    let projectList = fieldset.children[10].value;\n    let checked = null;\n    // Change string value to boolean\n    if (e.target.parentNode.parentNode.dataset.check === \"false\") {\n      checked = false;\n    } else {\n      checked = true;\n    }\n\n    const ID = +e.target.parentNode.parentNode.dataset.id;\n\n    // Makes sure that tasks title contains any letter or number\n    if (_services__WEBPACK_IMPORTED_MODULE_5__.containsLetters(title) || _services__WEBPACK_IMPORTED_MODULE_5__.containsNumbers(title)) {\n      // Makes sure that projectCatcher contains letters or numbers\n      if (\n        _services__WEBPACK_IMPORTED_MODULE_5__.containsLetters(projectCatcher.value) ||\n        _services__WEBPACK_IMPORTED_MODULE_5__.containsNumbers(projectCatcher.value)\n      ) {\n        projectList = projectCatcher.value;\n        const task = {\n          title,\n          description,\n          date,\n          priority,\n          projectList,\n          checked,\n          ID,\n        };\n        // Update objectCatcher\n        objectCatcher.splice(ID, 1, task);\n        // Update localStorage\n        localStorage.clear();\n        for (let i = 0; i <= objectCatcher.length - 1; i += 1) {\n          localStorage.setItem(`${i}`, JSON.stringify(objectCatcher[i]));\n        }\n        // Reload page\n        window.location.reload();\n      }\n      // Makes sure that projectCatcher does not contain letters or numbers\n      if (\n        !_services__WEBPACK_IMPORTED_MODULE_5__.containsLetters(projectCatcher.value) ||\n        !_services__WEBPACK_IMPORTED_MODULE_5__.containsNumbers(projectCatcher.value)\n      ) {\n        const task = {\n          title,\n          description,\n          date,\n          priority,\n          projectList,\n          checked,\n          ID,\n        };\n        // Update objectCather\n        objectCatcher.splice(ID, 1, task);\n        // Update localStorage\n        localStorage.clear();\n        for (let i = 0; i <= objectCatcher.length - 1; i += 1) {\n          localStorage.setItem(`${i}`, JSON.stringify(objectCatcher[i]));\n        }\n        // Reload page\n        window.location.reload();\n      }\n    }\n  }\n}\nformButton.addEventListener(\"click\", taskCreator);\n\n(function showCard() {\n  for (let i = 0; i <= objectCatcher.length - 1; i += 1) {\n    const cardSection = document.createElement(\"div\");\n    cardSection.classList.add(\"cardSection\");\n    cardSection.dataset.Id = objectCatcher[i].ID;\n    cardSection.dataset.checked = objectCatcher[i].checked;\n    cardList.appendChild(cardSection);\n\n    const card = document.createElement(\"div\");\n    card.classList.add(\"card\");\n    cardSection.appendChild(card);\n\n    const checkbox = document.createElement(\"div\");\n    checkbox.classList.add(\"checkbox\");\n    const checkboxInput = document.createElement(\"input\");\n    checkboxInput.classList.add(\"checkboxInput\");\n    checkboxInput.setAttribute(\"type\", \"checkbox\");\n    checkboxInput.setAttribute(\"name\", \"checkbox\");\n    checkboxInput.checked = false;\n    if (objectCatcher[i].checked === true) checkboxInput.checked = true;\n    card.appendChild(checkbox);\n\n    const cardTitle = document.createElement(\"div\");\n    cardTitle.classList.add(\"cardTitle\");\n    const cardTitleP = document.createElement(\"p\");\n    card.appendChild(cardTitle);\n    checkbox.appendChild(checkboxInput);\n    cardTitle.appendChild(cardTitleP);\n    cardTitleP.innerText = `${objectCatcher[i].title}`;\n\n    const cardDate = document.createElement(\"div\");\n    cardDate.classList.add(\"cardDate\");\n    const cardDateP = document.createElement(\"p\");\n    card.appendChild(cardDate);\n\n    const expandButton = document.createElement(\"div\");\n    expandButton.classList.add(\"expandButton\");\n    const chevronDown = new Image();\n    chevronDown.classList.add(\"chevronDown\");\n    chevronDown.src = _icons_chevron_svg__WEBPACK_IMPORTED_MODULE_2__;\n    card.appendChild(expandButton);\n    expandButton.appendChild(chevronDown);\n\n    const description = document.createElement(\"div\");\n    description.classList.add(\"description\");\n    description.hidden = true;\n    const descriptionT = document.createElement(\"div\");\n    descriptionT.classList.add(\"descriptionT\");\n    descriptionT.innerText = \"description\";\n    const descriptionB = document.createElement(\"div\");\n    descriptionB.classList.add(\"descriptionB\");\n    descriptionB.innerText = \"\";\n    cardSection.appendChild(description);\n    description.appendChild(descriptionT);\n    description.appendChild(descriptionB);\n    descriptionB.innerText = `${objectCatcher[i].description}`;\n\n    const edition = document.createElement(\"div\");\n    edition.classList.add(\"edition\");\n    edition.hidden = true;\n    const editButton = document.createElement(\"button\");\n    editButton.hidden = true;\n    editButton.innerText = \"edit\";\n    const deleteButton = document.createElement(\"button\");\n    deleteButton.classList.add(\"deleteButton\");\n    deleteButton.hidden = true;\n    deleteButton.innerText = \"delete\";\n    cardSection.appendChild(edition);\n    edition.appendChild(editButton);\n    edition.appendChild(deleteButton);\n    cardDate.appendChild(cardDateP);\n    cardDateP.innerText = `${objectCatcher[i].date}`;\n\n    const expander = () => {\n      if (description.hidden && edition.hidden) {\n        description.hidden = false;\n        edition.hidden = false;\n        editButton.hidden = false;\n        deleteButton.hidden = false;\n      } else {\n        description.hidden = true;\n        edition.hidden = true;\n        editButton.hidden = true;\n        deleteButton.hidden = true;\n      }\n    };\n    expandButton.addEventListener(\"click\", expander);\n    checkboxInput.onchange = checkboxAction;\n    deleteButton.onclick = deletion;\n    editButton.onclick = editAction;\n  }\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdHMvcHJvamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQjtBQUNJO0FBQ3FCO0FBQ0o7QUFDUjtBQUNLOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFLO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5Qyx3REFBd0QsRUFBRTtBQUMxRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxjQUFjO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsU0FBUyxjQUFjO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0JBQStCO0FBQ2pELDZCQUE2QixFQUFFO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQkFBK0I7QUFDakQsNEJBQTRCLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLHNEQUF3QixXQUFXLHNEQUF3QjtBQUNuRTtBQUNBO0FBQ0EsUUFBUSxzREFBd0I7QUFDaEMsUUFBUSxzREFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtCQUErQjtBQUN2RCxrQ0FBa0MsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNEQUF3QjtBQUNqQyxTQUFTLHNEQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtCQUErQjtBQUN2RCxrQ0FBa0MsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVCQUF1Qjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkJBQTZCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNCQUFzQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzL3Byb2plY3RzLmpzPzViZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuLi9mb3JtL2Zvcm0uY3NzXCI7XG5pbXBvcnQgY2hldnJvbkljb24gZnJvbSBcIi4uL2ljb25zL2NoZXZyb24uc3ZnXCI7XG5pbXBvcnQgcmVuZXcgZnJvbSBcIi4uL2ljb25zL2F1dG9yZW5ldy5zdmdcIjtcbmltcG9ydCBcIi4uL2FsbC10YXNrcy9hbGxUYXNrcy5jc3NcIjtcbmltcG9ydCAqIGFzIHNlcnZpY2VzIGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCB0YXNrUHJlc2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tQcmVzZW50ZXIuY2xhc3NMaXN0LmFkZChcInRhc2tQcmVzZW50ZXJcIik7XG5jb25zdCB0UHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRQdGl0bGUuY2xhc3NMaXN0LmFkZChcInRQdGl0bGVcIik7XG5jb25zdCBoMUFsbHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuaDFBbGx0YXNrcy5pbm5lclRleHQgPSBcIkFsbCB0YXNrc1wiO1xuY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY2FyZExpc3QuY2xhc3NMaXN0LmFkZChcImNhcmRMaXN0XCIpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkQnV0dG9uXCIpO1xuYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiK1wiO1xuYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiQWRkIG5ldyB0YXNrXCIpO1xuY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2V0QnV0dG9uXCIpO1xuY29uc3QgcmVuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xucmVuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwicmVuZXdJbWFnZVwiKTtcbnJlbmV3SW1hZ2Uuc3JjID0gcmVuZXc7XG5yZXNldEJ1dHRvbi5hcHBlbmRDaGlsZChyZW5ld0ltYWdlKTtcbnJlc2V0QnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiY2xlYXIgYWxsXCIpO1xuXG5jb25zdCBjZW50ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlckRpdlwiKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgcHJvamVjdENhdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDYXRjaGVyXCIpO1xuY29uc3QgZm9ybVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcbmZvcm1Qcmlvcml0eS52YWx1ZSA9IFwiXCI7XG5jb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmaWVsZHNldFwiKTtcbmNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1CdXR0b25cIik7XG5cbi8vIFVwZGF0ZSBzY3JlZW5cbmNlbnRlckRpdi5yZXBsYWNlV2l0aCh0YXNrUHJlc2VudGVyKTtcbm1haW4uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbm1haW4uYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xudGFza1ByZXNlbnRlci5hcHBlbmRDaGlsZCh0UHRpdGxlKTtcbnRhc2tQcmVzZW50ZXIuaGlkZGVuID0gZmFsc2U7XG50UHRpdGxlLmFwcGVuZENoaWxkKGgxQWxsdGFza3MpO1xudGFza1ByZXNlbnRlci5hcHBlbmRDaGlsZChjYXJkTGlzdCk7XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkFjdGlvbigpIHtcbiAgdGFza1ByZXNlbnRlci5yZXBsYWNlV2l0aChmb3JtKTtcbiAgZm9ybS5oaWRkZW4gPSBmYWxzZTtcbiAgbWFpbi5yZW1vdmVDaGlsZChhZGRCdXR0b24pO1xuICBtYWluLnJlbW92ZUNoaWxkKHJlc2V0QnV0dG9uKTtcbn1cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQnV0dG9uQWN0aW9uKTtcblxuZnVuY3Rpb24gcmVzZXRCdXR0b25BY3Rpb24oKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG5yZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRCdXR0b25BY3Rpb24pO1xuXG4vLyBVcGRhdGUgb2JqZWN0Q2F0Y2hlclxuY29uc3Qgb2JqZWN0Q2F0Y2hlciA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPD0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICBvYmplY3RDYXRjaGVyLnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtpfWApKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94QWN0aW9uKGUpIHtcbiAgY29uc3QgdGFyZ2V0Tm9kZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQ7XG5cbiAgaWYgKG9iamVjdENhdGNoZXJbdGFyZ2V0Tm9kZS5JZF0uY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICBvYmplY3RDYXRjaGVyW3RhcmdldE5vZGUuSWRdLmNoZWNrZWQgPSB0cnVlO1xuICAgIC8vIHVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIGAke3RhcmdldE5vZGUuSWR9YCxcbiAgICAgIEpTT04uc3RyaW5naWZ5KG9iamVjdENhdGNoZXJbdGFyZ2V0Tm9kZS5JZF0pXG4gICAgKTtcbiAgICB0YXJnZXROb2RlLmNoZWNrZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKG9iamVjdENhdGNoZXJbdGFyZ2V0Tm9kZS5JZF0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIG9iamVjdENhdGNoZXJbdGFyZ2V0Tm9kZS5JZF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgYCR7dGFyZ2V0Tm9kZS5JZH1gLFxuICAgICAgSlNPTi5zdHJpbmdpZnkob2JqZWN0Q2F0Y2hlclt0YXJnZXROb2RlLklkXSlcbiAgICApO1xuICAgIHRhcmdldE5vZGUuY2hlY2tlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0aW9uKGUpIHtcbiAgY29uc3QgdGFyZ2V0Tm9kZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LklkO1xuICAvLyByZW1vdmUgdGFyZ2V0Tm9kZSBpbW1lZGlhdGVseVxuICBjYXJkTGlzdC5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAvLyBVcGRhdGUgb2JqZWN0Q2F0Y2hlclxuICBvYmplY3RDYXRjaGVyLnNwbGljZSgrdGFyZ2V0Tm9kZSwgMSk7XG4gIC8vIFVwZGF0ZSBvYmplY3RzIElEXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG9iamVjdENhdGNoZXIubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgb2JqZWN0Q2F0Y2hlcltpXS5JRCA9IGAke2l9YDtcbiAgfVxuICAvLyBVcGRhdGUgbG9jYWxTdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBvYmplY3RDYXRjaGVyLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2l9YCwgSlNPTi5zdHJpbmdpZnkob2JqZWN0Q2F0Y2hlcltpXSkpO1xuICB9XG4gIC8vIFJlbG9hZCBwYWdlXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuZnVuY3Rpb24gZWRpdEFjdGlvbihlKSB7XG4gIGNvbnN0IHRhcmdldE5vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5JZDtcbiAgY29uc3QgY2hlY2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5jaGVja2VkO1xuICBmb3JtLmRhdGFzZXQuZWRpdCA9IHRydWU7XG4gIGZvcm0uZGF0YXNldC5pZCA9IHRhcmdldE5vZGU7XG4gIGZvcm0uZGF0YXNldC5jaGVjayA9IGNoZWNrO1xuICB0YXNrUHJlc2VudGVyLnJlcGxhY2VXaXRoKGZvcm0pO1xuICBmb3JtLmhpZGRlbiA9IGZhbHNlO1xuICBtYWluLnJlbW92ZUNoaWxkKGFkZEJ1dHRvbik7XG4gIG1haW4ucmVtb3ZlQ2hpbGQocmVzZXRCdXR0b24pO1xuICBjb25zdCB0aXRsZSA9IGZvcm0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl07XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5jaGlsZHJlblswXS5jaGlsZHJlbls0XTtcbiAgY29uc3QgZGF0ZSA9IGZvcm0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bNl07XG4gIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5jaGlsZHJlblswXS5jaGlsZHJlbls4XTtcbiAgY29uc3QgcHJvamVjdCA9IGZvcm0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMTBdO1xuXG4gIHRpdGxlLnZhbHVlID0gb2JqZWN0Q2F0Y2hlclt0YXJnZXROb2RlXS50aXRsZTtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBvYmplY3RDYXRjaGVyW3RhcmdldE5vZGVdLmRlc2NyaXB0aW9uO1xuICBkYXRlLnZhbHVlID0gb2JqZWN0Q2F0Y2hlclt0YXJnZXROb2RlXS5kYXRlO1xuICBwcmlvcml0eS52YWx1ZSA9IG9iamVjdENhdGNoZXJbdGFyZ2V0Tm9kZV0ucHJpb3JpdHk7XG4gIHByb2plY3QudmFsdWUgPSBvYmplY3RDYXRjaGVyW3RhcmdldE5vZGVdLnByb2plY3RMaXN0O1xufVxuXG5mdW5jdGlvbiB0YXNrQ3JlYXRvcihlKSB7XG4gIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5lZGl0ID09PSBcInRydWVcIikge1xuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsyXS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bNF0udmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bNl0udmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzhdLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGZpZWxkc2V0LmNoaWxkcmVuWzEwXS52YWx1ZTtcbiAgICBsZXQgY2hlY2tlZCA9IG51bGw7XG4gICAgLy8gQ2hhbmdlIHN0cmluZyB2YWx1ZSB0byBib29sZWFuXG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmNoZWNrID09PSBcImZhbHNlXCIpIHtcbiAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgSUQgPSArZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cbiAgICAvLyBNYWtlcyBzdXJlIHRoYXQgdGFza3MgdGl0bGUgY29udGFpbnMgYW55IGxldHRlciBvciBudW1iZXJcbiAgICBpZiAoc2VydmljZXMuY29udGFpbnNMZXR0ZXJzKHRpdGxlKSB8fCBzZXJ2aWNlcy5jb250YWluc051bWJlcnModGl0bGUpKSB7XG4gICAgICAvLyBNYWtlcyBzdXJlIHRoYXQgcHJvamVjdENhdGNoZXIgY29udGFpbnMgbGV0dGVycyBvciBudW1iZXJzXG4gICAgICBpZiAoXG4gICAgICAgIHNlcnZpY2VzLmNvbnRhaW5zTGV0dGVycyhwcm9qZWN0Q2F0Y2hlci52YWx1ZSkgfHxcbiAgICAgICAgc2VydmljZXMuY29udGFpbnNOdW1iZXJzKHByb2plY3RDYXRjaGVyLnZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIHByb2plY3RMaXN0ID0gcHJvamVjdENhdGNoZXIudmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZGF0ZSxcbiAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICBwcm9qZWN0TGlzdCxcbiAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgIElELFxuICAgICAgICB9O1xuICAgICAgICAvLyBVcGRhdGUgb2JqZWN0Q2F0Y2hlclxuICAgICAgICBvYmplY3RDYXRjaGVyLnNwbGljZShJRCwgMSwgdGFzayk7XG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG9iamVjdENhdGNoZXIubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aX1gLCBKU09OLnN0cmluZ2lmeShvYmplY3RDYXRjaGVyW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVsb2FkIHBhZ2VcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgICAgLy8gTWFrZXMgc3VyZSB0aGF0IHByb2plY3RDYXRjaGVyIGRvZXMgbm90IGNvbnRhaW4gbGV0dGVycyBvciBudW1iZXJzXG4gICAgICBpZiAoXG4gICAgICAgICFzZXJ2aWNlcy5jb250YWluc0xldHRlcnMocHJvamVjdENhdGNoZXIudmFsdWUpIHx8XG4gICAgICAgICFzZXJ2aWNlcy5jb250YWluc051bWJlcnMocHJvamVjdENhdGNoZXIudmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBkYXRlLFxuICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgIHByb2plY3RMaXN0LFxuICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgSUQsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFVwZGF0ZSBvYmplY3RDYXRoZXJcbiAgICAgICAgb2JqZWN0Q2F0Y2hlci5zcGxpY2UoSUQsIDEsIHRhc2spO1xuICAgICAgICAvLyBVcGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBvYmplY3RDYXRjaGVyLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2l9YCwgSlNPTi5zdHJpbmdpZnkob2JqZWN0Q2F0Y2hlcltpXSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbG9hZCBwYWdlXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDcmVhdG9yKTtcblxuKGZ1bmN0aW9uIHNob3dDYXJkKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBvYmplY3RDYXRjaGVyLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2FyZFNlY3Rpb25cIik7XG4gICAgY2FyZFNlY3Rpb24uZGF0YXNldC5JZCA9IG9iamVjdENhdGNoZXJbaV0uSUQ7XG4gICAgY2FyZFNlY3Rpb24uZGF0YXNldC5jaGVja2VkID0gb2JqZWN0Q2F0Y2hlcltpXS5jaGVja2VkO1xuICAgIGNhcmRMaXN0LmFwcGVuZENoaWxkKGNhcmRTZWN0aW9uKTtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3hJbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hJbnB1dFwiKTtcbiAgICBjaGVja2JveElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBjaGVja2JveElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICBpZiAob2JqZWN0Q2F0Y2hlcltpXS5jaGVja2VkID09PSB0cnVlKSBjaGVja2JveElucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmRUaXRsZVwiKTtcbiAgICBjb25zdCBjYXJkVGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrYm94SW5wdXQpO1xuICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjYXJkVGl0bGVQKTtcbiAgICBjYXJkVGl0bGVQLmlubmVyVGV4dCA9IGAke29iamVjdENhdGNoZXJbaV0udGl0bGV9YDtcblxuICAgIGNvbnN0IGNhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkRGF0ZS5jbGFzc0xpc3QuYWRkKFwiY2FyZERhdGVcIik7XG4gICAgY29uc3QgY2FyZERhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGF0ZSk7XG5cbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kQnV0dG9uXCIpO1xuICAgIGNvbnN0IGNoZXZyb25Eb3duID0gbmV3IEltYWdlKCk7XG4gICAgY2hldnJvbkRvd24uY2xhc3NMaXN0LmFkZChcImNoZXZyb25Eb3duXCIpO1xuICAgIGNoZXZyb25Eb3duLnNyYyA9IGNoZXZyb25JY29uO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcbiAgICBleHBhbmRCdXR0b24uYXBwZW5kQ2hpbGQoY2hldnJvbkRvd24pO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25ULmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblRcIik7XG4gICAgZGVzY3JpcHRpb25ULmlubmVyVGV4dCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uQi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25CXCIpO1xuICAgIGRlc2NyaXB0aW9uQi5pbm5lclRleHQgPSBcIlwiO1xuICAgIGNhcmRTZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblQpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQik7XG4gICAgZGVzY3JpcHRpb25CLmlubmVyVGV4dCA9IGAke29iamVjdENhdGNoZXJbaV0uZGVzY3JpcHRpb259YDtcblxuICAgIGNvbnN0IGVkaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRpb24uY2xhc3NMaXN0LmFkZChcImVkaXRpb25cIik7XG4gICAgZWRpdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiZWRpdFwiO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVCdXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmhpZGRlbiA9IHRydWU7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiZGVsZXRlXCI7XG4gICAgY2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZWRpdGlvbik7XG4gICAgZWRpdGlvbi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBlZGl0aW9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgY2FyZERhdGUuYXBwZW5kQ2hpbGQoY2FyZERhdGVQKTtcbiAgICBjYXJkRGF0ZVAuaW5uZXJUZXh0ID0gYCR7b2JqZWN0Q2F0Y2hlcltpXS5kYXRlfWA7XG5cbiAgICBjb25zdCBleHBhbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChkZXNjcmlwdGlvbi5oaWRkZW4gJiYgZWRpdGlvbi5oaWRkZW4pIHtcbiAgICAgICAgZGVzY3JpcHRpb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGVkaXRpb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGVkaXRCdXR0b24uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGVkaXRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgZWRpdEJ1dHRvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBkZWxldGVCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhwYW5kZXIpO1xuICAgIGNoZWNrYm94SW5wdXQub25jaGFuZ2UgPSBjaGVja2JveEFjdGlvbjtcbiAgICBkZWxldGVCdXR0b24ub25jbGljayA9IGRlbGV0aW9uO1xuICAgIGVkaXRCdXR0b24ub25jbGljayA9IGVkaXRBY3Rpb247XG4gIH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/projects/projects.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"projects": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["src_index_js","src_all-tasks_allTasks_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_require__.O(undefined, ["src_index_js","src_all-tasks_allTasks_js"], () => (__webpack_require__("./src/services.js")))
/******/ 	__webpack_require__.O(undefined, ["src_index_js","src_all-tasks_allTasks_js"], () => (__webpack_require__("./src/DOM.js")))
/******/ 	__webpack_require__.O(undefined, ["src_index_js","src_all-tasks_allTasks_js"], () => (__webpack_require__("./src/all-tasks/allTasks.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_index_js","src_all-tasks_allTasks_js"], () => (__webpack_require__("./src/projects/projects.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;