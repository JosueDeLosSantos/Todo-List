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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendOption\": () => (/* binding */ appendOption)\n/* harmony export */ });\n// append options to select tags\nfunction appendOption(selectClass, option) {\n  const optionMaker = document.createElement(\"option\");\n  optionMaker.setAttribute(\"value\", `${option}`);\n  optionMaker.innerText = `${option}`;\n  return selectClass.appendChild(optionMaker);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRE9NLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQSx1Q0FBdUMsT0FBTztBQUM5Qyw2QkFBNkIsT0FBTztBQUNwQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS5qcz9mZWIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcGVuZCBvcHRpb25zIHRvIHNlbGVjdCB0YWdzXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kT3B0aW9uKHNlbGVjdENsYXNzLCBvcHRpb24pIHtcbiAgY29uc3Qgb3B0aW9uTWFrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25NYWtlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHtvcHRpb259YCk7XG4gIG9wdGlvbk1ha2VyLmlubmVyVGV4dCA9IGAke29wdGlvbn1gO1xuICByZXR1cm4gc2VsZWN0Q2xhc3MuYXBwZW5kQ2hpbGQob3B0aW9uTWFrZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/DOM.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/services.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.css */ \"./src/form.css\");\n/* harmony import */ var _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/pin.png */ \"./src/icons/pin.png\");\n\n\n\n\n\n\nconst logoIcon = document.querySelector(\".logoIcon\");\nconst logoCenterIcon = document.querySelector(\".logoCenterIcon\");\nconst logoPinIcon = new Image();\nconst logoPinIcon2 = new Image();\nlogoPinIcon.src = _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__;\nlogoPinIcon2.src = _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__;\nlogoIcon.appendChild(logoPinIcon);\nlogoCenterIcon.appendChild(logoPinIcon2);\nconst main = document.querySelector(\"main\");\nconst centerDiv = document.querySelector(\".centerDiv\");\nconst form = document.querySelector(\"form\");\nconst button = document.querySelector(\"button\");\nconst spanCenter3 = document.querySelector(\".spanCenter3\");\nconst addProject = document.querySelector(\".addProject\");\nconst fieldset = document.querySelector(\"fieldset\");\nconst projectCatcher = document.querySelector(\".projectCatcher\");\nconst addProjectLink = document.querySelector(\".addProjectLink\");\nconst DOMprojectList = document.querySelector(\".DOMprojectList\");\n\nmain.appendChild(centerDiv);\nmain.removeChild(form);\n\nfunction showForm() {\n  main.removeChild(centerDiv);\n  main.appendChild(form);\n\n  const titleInput =\n    document.body.children[1].children[0].children[0].children[2];\n  const descriptionInput =\n    document.body.children[1].children[0].children[0].children[4];\n  const dateInput =\n    document.body.children[1].children[0].children[0].children[6];\n  const priorityInput =\n    document.body.children[1].children[0].children[0].children[8];\n  const projectList = fieldset.children[10];\n\n  // Cleans all the inputs value\n  titleInput.value = \"\";\n  descriptionInput.value = \"\";\n  dateInput.value = \"\";\n  priorityInput.value = \"\";\n  projectCatcher.value = \"\";\n  projectList.value = \"All\";\n\n  if (projectList.hidden === true) projectList.hidden = false;\n}\nwindow.showForm = showForm;\nspanCenter3.addEventListener(\"click\", showForm);\n\nconst taskRepo = [];\nconst projectRepo = [\"All\"];\nlet counter = 0;\nlet tracker = localStorage.getItem(\"counter\");\ntracker = +tracker;\n\nfunction hideForm(e) {\n  main.appendChild(centerDiv);\n  main.removeChild(form);\n  projectCatcher.hidden = true;\n  addProjectLink.hidden = false;\n\n  const title = e.target.parentNode.children[2].value;\n  const description = e.target.parentNode.children[4].value;\n  const date = e.target.parentNode.children[6].value;\n  const priority = e.target.parentNode.children[8].value;\n  let projectList = fieldset.children[10].value;\n\n  let task = { title, description, date, priority, projectList };\n\n  /* if (tracker == 0) {\n    counter += 1;\n    localStorage.setItem(\"counter\", `${counter}`);\n    localStorage.setItem(`${counter}`, JSON.stringify(task));\n  } else {\n    tracker += 1;\n    localStorage.setItem(\"counter\", `${tracker}`);\n    localStorage.setItem(`${tracker}`, JSON.stringify(task));\n  } */\n\n  if (!_services__WEBPACK_IMPORTED_MODULE_0__.containsAnyLetters(title) && !_services__WEBPACK_IMPORTED_MODULE_0__.containsNumbers(title)) {\n    return;\n  }\n\n  if (projectCatcher.value === \"\") {\n    taskRepo.push(task);\n    console.log(taskRepo);\n\n    if (tracker == 0) {\n      counter += 1;\n      localStorage.setItem(\"counter\", `${counter}`);\n      localStorage.setItem(`${counter}`, JSON.stringify(task));\n    } else {\n      tracker += 1;\n      localStorage.setItem(\"counter\", `${tracker}`);\n      localStorage.setItem(`${tracker}`, JSON.stringify(task));\n    }\n    return;\n  }\n\n  // if projectCatcher.value contains only letters or only letters and numbers\n  if (\n    _services__WEBPACK_IMPORTED_MODULE_0__.onlyLetters(projectCatcher.value) ||\n    _services__WEBPACK_IMPORTED_MODULE_0__.onlyLettersAndNumbers(projectCatcher.value)\n  ) {\n    // if the projectCatcher.value has already been added to projectRepo.\n    if (\n      _services__WEBPACK_IMPORTED_MODULE_0__.arrWordFinder(projectRepo, projectCatcher.value) ===\n      projectCatcher.value\n    ) {\n      projectList = projectCatcher.value;\n      task = { title, description, date, priority, projectList };\n      taskRepo.push(task);\n      console.log(taskRepo);\n\n      if (tracker == 0) {\n        counter += 1;\n        localStorage.setItem(\"counter\", `${counter}`);\n        localStorage.setItem(`${counter}`, JSON.stringify(task));\n      } else {\n        tracker += 1;\n        localStorage.setItem(\"counter\", `${tracker}`);\n        localStorage.setItem(`${tracker}`, JSON.stringify(task));\n      }\n      return;\n    }\n\n    projectRepo.push(projectCatcher.value);\n    projectList = projectCatcher.value;\n    task = { title, description, date, priority, projectList };\n    taskRepo.push(task);\n    _DOM__WEBPACK_IMPORTED_MODULE_1__.appendOption(DOMprojectList, projectCatcher.value);\n    console.log(taskRepo);\n\n    if (tracker == 0) {\n      counter += 1;\n      localStorage.setItem(\"counter\", `${counter}`);\n      localStorage.setItem(`${counter}`, JSON.stringify(task));\n    } else {\n      tracker += 1;\n      localStorage.setItem(\"counter\", `${tracker}`);\n      localStorage.setItem(`${tracker}`, JSON.stringify(task));\n    }\n    return;\n  }\n\n  taskRepo.push(task);\n  console.log(taskRepo);\n}\nwindow.hideForm = hideForm;\nbutton.addEventListener(\"click\", hideForm);\n\nfunction projectMaker(e) {\n  const projectList = e.target.parentNode.parentNode.children[10];\n  projectList.hidden = true;\n  projectCatcher.hidden = false;\n  addProjectLink.hidden = true;\n}\nwindow.projectMaker = projectMaker;\naddProject.addEventListener(\"click\", projectMaker);\n\nlet objectCatcher = [];\nfor (let i = 0; i <= tracker; i += 1) {\n  objectCatcher.push(JSON.parse(localStorage.getItem(`${i}`)));\n}\n\nconsole.log(objectCatcher[1].title);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ1Y7QUFDUjtBQUNEO0FBQ2tCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQ0FBTztBQUN6QixtQkFBbUIsMkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQyw0QkFBNEIsUUFBUTtBQUNwQyxJQUFJO0FBQ0o7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQyw0QkFBNEIsUUFBUTtBQUNwQyxJQUFJOztBQUVKLE9BQU8seURBQTJCLFlBQVksc0RBQXdCO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRCw4QkFBOEIsUUFBUTtBQUN0QyxNQUFNO0FBQ047QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRCw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksa0RBQW9CO0FBQ3hCLElBQUksNERBQThCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRCxnQ0FBZ0MsUUFBUTtBQUN4QyxRQUFRO0FBQ1I7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRCxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLElBQUksOENBQWdCO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRCw4QkFBOEIsUUFBUTtBQUN0QyxNQUFNO0FBQ047QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRCw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUIsd0RBQXdELEVBQUU7QUFDMUQ7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzZXJ2aWNlcyBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4vZm9ybS5jc3NcIjtcbmltcG9ydCBwaW5JY29uIGZyb20gXCIuL2ljb25zL3Bpbi5wbmdcIjtcblxuY29uc3QgbG9nb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29JY29uXCIpO1xuY29uc3QgbG9nb0NlbnRlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29DZW50ZXJJY29uXCIpO1xuY29uc3QgbG9nb1Bpbkljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGxvZ29QaW5JY29uMiA9IG5ldyBJbWFnZSgpO1xubG9nb1Bpbkljb24uc3JjID0gcGluSWNvbjtcbmxvZ29QaW5JY29uMi5zcmMgPSBwaW5JY29uO1xubG9nb0ljb24uYXBwZW5kQ2hpbGQobG9nb1Bpbkljb24pO1xubG9nb0NlbnRlckljb24uYXBwZW5kQ2hpbGQobG9nb1Bpbkljb24yKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IGNlbnRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VudGVyRGl2XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbmNvbnN0IHNwYW5DZW50ZXIzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGFuQ2VudGVyM1wiKTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIik7XG5jb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmaWVsZHNldFwiKTtcbmNvbnN0IHByb2plY3RDYXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q2F0Y2hlclwiKTtcbmNvbnN0IGFkZFByb2plY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0TGlua1wiKTtcbmNvbnN0IERPTXByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ET01wcm9qZWN0TGlzdFwiKTtcblxubWFpbi5hcHBlbmRDaGlsZChjZW50ZXJEaXYpO1xubWFpbi5yZW1vdmVDaGlsZChmb3JtKTtcblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gIG1haW4ucmVtb3ZlQ2hpbGQoY2VudGVyRGl2KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID1cbiAgICBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID1cbiAgICBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzRdO1xuICBjb25zdCBkYXRlSW5wdXQgPVxuICAgIGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bNl07XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPVxuICAgIGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bOF07XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZmllbGRzZXQuY2hpbGRyZW5bMTBdO1xuXG4gIC8vIENsZWFucyBhbGwgdGhlIGlucHV0cyB2YWx1ZVxuICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0Q2F0Y2hlci52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3RMaXN0LnZhbHVlID0gXCJBbGxcIjtcblxuICBpZiAocHJvamVjdExpc3QuaGlkZGVuID09PSB0cnVlKSBwcm9qZWN0TGlzdC5oaWRkZW4gPSBmYWxzZTtcbn1cbndpbmRvdy5zaG93Rm9ybSA9IHNob3dGb3JtO1xuc3BhbkNlbnRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcblxuY29uc3QgdGFza1JlcG8gPSBbXTtcbmNvbnN0IHByb2plY3RSZXBvID0gW1wiQWxsXCJdO1xubGV0IGNvdW50ZXIgPSAwO1xubGV0IHRyYWNrZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIik7XG50cmFja2VyID0gK3RyYWNrZXI7XG5cbmZ1bmN0aW9uIGhpZGVGb3JtKGUpIHtcbiAgbWFpbi5hcHBlbmRDaGlsZChjZW50ZXJEaXYpO1xuICBtYWluLnJlbW92ZUNoaWxkKGZvcm0pO1xuICBwcm9qZWN0Q2F0Y2hlci5oaWRkZW4gPSB0cnVlO1xuICBhZGRQcm9qZWN0TGluay5oaWRkZW4gPSBmYWxzZTtcblxuICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMl0udmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbls0XS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bNl0udmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbls4XS52YWx1ZTtcbiAgbGV0IHByb2plY3RMaXN0ID0gZmllbGRzZXQuY2hpbGRyZW5bMTBdLnZhbHVlO1xuXG4gIGxldCB0YXNrID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0TGlzdCB9O1xuXG4gIC8qIGlmICh0cmFja2VyID09IDApIHtcbiAgICBjb3VudGVyICs9IDE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIGAke2NvdW50ZXJ9YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Y291bnRlcn1gLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJhY2tlciArPSAxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBgJHt0cmFja2VyfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RyYWNrZXJ9YCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICB9ICovXG5cbiAgaWYgKCFzZXJ2aWNlcy5jb250YWluc0FueUxldHRlcnModGl0bGUpICYmICFzZXJ2aWNlcy5jb250YWluc051bWJlcnModGl0bGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHByb2plY3RDYXRjaGVyLnZhbHVlID09PSBcIlwiKSB7XG4gICAgdGFza1JlcG8ucHVzaCh0YXNrKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrUmVwbyk7XG5cbiAgICBpZiAodHJhY2tlciA9PSAwKSB7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgYCR7Y291bnRlcn1gKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2NvdW50ZXJ9YCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFja2VyICs9IDE7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgYCR7dHJhY2tlcn1gKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RyYWNrZXJ9YCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBpZiBwcm9qZWN0Q2F0Y2hlci52YWx1ZSBjb250YWlucyBvbmx5IGxldHRlcnMgb3Igb25seSBsZXR0ZXJzIGFuZCBudW1iZXJzXG4gIGlmIChcbiAgICBzZXJ2aWNlcy5vbmx5TGV0dGVycyhwcm9qZWN0Q2F0Y2hlci52YWx1ZSkgfHxcbiAgICBzZXJ2aWNlcy5vbmx5TGV0dGVyc0FuZE51bWJlcnMocHJvamVjdENhdGNoZXIudmFsdWUpXG4gICkge1xuICAgIC8vIGlmIHRoZSBwcm9qZWN0Q2F0Y2hlci52YWx1ZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHByb2plY3RSZXBvLlxuICAgIGlmIChcbiAgICAgIHNlcnZpY2VzLmFycldvcmRGaW5kZXIocHJvamVjdFJlcG8sIHByb2plY3RDYXRjaGVyLnZhbHVlKSA9PT1cbiAgICAgIHByb2plY3RDYXRjaGVyLnZhbHVlXG4gICAgKSB7XG4gICAgICBwcm9qZWN0TGlzdCA9IHByb2plY3RDYXRjaGVyLnZhbHVlO1xuICAgICAgdGFzayA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdExpc3QgfTtcbiAgICAgIHRhc2tSZXBvLnB1c2godGFzayk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrUmVwbyk7XG5cbiAgICAgIGlmICh0cmFja2VyID09IDApIHtcbiAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgYCR7Y291bnRlcn1gKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Y291bnRlcn1gLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFja2VyICs9IDE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBgJHt0cmFja2VyfWApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0cmFja2VyfWAsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0UmVwby5wdXNoKHByb2plY3RDYXRjaGVyLnZhbHVlKTtcbiAgICBwcm9qZWN0TGlzdCA9IHByb2plY3RDYXRjaGVyLnZhbHVlO1xuICAgIHRhc2sgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3RMaXN0IH07XG4gICAgdGFza1JlcG8ucHVzaCh0YXNrKTtcbiAgICBET00uYXBwZW5kT3B0aW9uKERPTXByb2plY3RMaXN0LCBwcm9qZWN0Q2F0Y2hlci52YWx1ZSk7XG4gICAgY29uc29sZS5sb2codGFza1JlcG8pO1xuXG4gICAgaWYgKHRyYWNrZXIgPT0gMCkge1xuICAgICAgY291bnRlciArPSAxO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIGAke2NvdW50ZXJ9YCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtjb3VudGVyfWAsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhY2tlciArPSAxO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIGAke3RyYWNrZXJ9YCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0cmFja2VyfWAsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFza1JlcG8ucHVzaCh0YXNrKTtcbiAgY29uc29sZS5sb2codGFza1JlcG8pO1xufVxud2luZG93LmhpZGVGb3JtID0gaGlkZUZvcm07XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVGb3JtKTtcblxuZnVuY3Rpb24gcHJvamVjdE1ha2VyKGUpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bMTBdO1xuICBwcm9qZWN0TGlzdC5oaWRkZW4gPSB0cnVlO1xuICBwcm9qZWN0Q2F0Y2hlci5oaWRkZW4gPSBmYWxzZTtcbiAgYWRkUHJvamVjdExpbmsuaGlkZGVuID0gdHJ1ZTtcbn1cbndpbmRvdy5wcm9qZWN0TWFrZXIgPSBwcm9qZWN0TWFrZXI7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0TWFrZXIpO1xuXG5sZXQgb2JqZWN0Q2F0Y2hlciA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPD0gdHJhY2tlcjsgaSArPSAxKSB7XG4gIG9iamVjdENhdGNoZXIucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2l9YCkpKTtcbn1cblxuY29uc29sZS5sb2cob2JqZWN0Q2F0Y2hlclsxXS50aXRsZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrWordFinder\": () => (/* binding */ arrWordFinder),\n/* harmony export */   \"arrayBuilder\": () => (/* binding */ arrayBuilder),\n/* harmony export */   \"containsAnyLetters\": () => (/* binding */ containsAnyLetters),\n/* harmony export */   \"containsNumbers\": () => (/* binding */ containsNumbers),\n/* harmony export */   \"lSiterator\": () => (/* binding */ lSiterator),\n/* harmony export */   \"onlyLetters\": () => (/* binding */ onlyLetters),\n/* harmony export */   \"onlyLettersAndNumbers\": () => (/* binding */ onlyLettersAndNumbers)\n/* harmony export */ });\n// Ensures that str contains letters and numbers\nfunction onlyLettersAndNumbers(str) {\n  return /^[A-Za-z0-9]*$/.test(str);\n}\n\n// Ensures that str contains only letters\nfunction onlyLetters(str) {\n  return /^[a-zA-Z]+$/.test(str);\n}\n\n// find word on array\nfunction arrWordFinder(array, word) {\n  return array.find((element) => element === `${word}`);\n}\n\n// Ensures that str contains any letters\nfunction containsAnyLetters(str) {\n  return /[a-zA-Z]/.test(str);\n}\n\n// Ensures that str contains any numbers\nfunction containsNumbers(str) {\n  return /\\d/.test(str);\n}\n\n// Array constructor\nfunction arrayBuilder(newArray) {\n  return newArray;\n}\n\n// localStorage iterator\nfunction lSiterator(parameter) {\n  for (let i = 0; i <= parameter; i += 1) {\n    JSON.parse(localStorage.getItem(`${i}`));\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUCxnREFBZ0QsS0FBSztBQUNyRDs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1Asa0JBQWtCLGdCQUFnQjtBQUNsQyx1Q0FBdUMsRUFBRTtBQUN6QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NlcnZpY2VzLmpzPzg3ZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRW5zdXJlcyB0aGF0IHN0ciBjb250YWlucyBsZXR0ZXJzIGFuZCBudW1iZXJzXG5leHBvcnQgZnVuY3Rpb24gb25seUxldHRlcnNBbmROdW1iZXJzKHN0cikge1xuICByZXR1cm4gL15bQS1aYS16MC05XSokLy50ZXN0KHN0cik7XG59XG5cbi8vIEVuc3VyZXMgdGhhdCBzdHIgY29udGFpbnMgb25seSBsZXR0ZXJzXG5leHBvcnQgZnVuY3Rpb24gb25seUxldHRlcnMoc3RyKSB7XG4gIHJldHVybiAvXlthLXpBLVpdKyQvLnRlc3Qoc3RyKTtcbn1cblxuLy8gZmluZCB3b3JkIG9uIGFycmF5XG5leHBvcnQgZnVuY3Rpb24gYXJyV29yZEZpbmRlcihhcnJheSwgd29yZCkge1xuICByZXR1cm4gYXJyYXkuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gYCR7d29yZH1gKTtcbn1cblxuLy8gRW5zdXJlcyB0aGF0IHN0ciBjb250YWlucyBhbnkgbGV0dGVyc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zQW55TGV0dGVycyhzdHIpIHtcbiAgcmV0dXJuIC9bYS16QS1aXS8udGVzdChzdHIpO1xufVxuXG4vLyBFbnN1cmVzIHRoYXQgc3RyIGNvbnRhaW5zIGFueSBudW1iZXJzXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnNOdW1iZXJzKHN0cikge1xuICByZXR1cm4gL1xcZC8udGVzdChzdHIpO1xufVxuXG4vLyBBcnJheSBjb25zdHJ1Y3RvclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QnVpbGRlcihuZXdBcnJheSkge1xuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cbi8vIGxvY2FsU3RvcmFnZSBpdGVyYXRvclxuZXhwb3J0IGZ1bmN0aW9uIGxTaXRlcmF0b3IocGFyYW1ldGVyKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHBhcmFtZXRlcjsgaSArPSAxKSB7XG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtpfWApKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services.js\n");

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
/******/ 			"index": 0
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
/******/ 	__webpack_require__.O(undefined, ["src_form_css-src_index_css-src_icons_pin_png"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_require__.O(undefined, ["src_form_css-src_index_css-src_icons_pin_png"], () => (__webpack_require__("./src/services.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_form_css-src_index_css-src_icons_pin_png"], () => (__webpack_require__("./src/DOM.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;