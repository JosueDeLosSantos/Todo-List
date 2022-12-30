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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/services.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.css */ \"./src/form.css\");\n/* harmony import */ var _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/pin.png */ \"./src/icons/pin.png\");\n\n\n\n\n\n\nconst logoIcon = document.querySelector(\".logoIcon\");\nconst logoCenterIcon = document.querySelector(\".logoCenterIcon\");\nconst logoPinIcon = new Image();\nconst logoPinIcon2 = new Image();\nlogoPinIcon.src = _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__;\nlogoPinIcon2.src = _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__;\nlogoIcon.appendChild(logoPinIcon);\nlogoCenterIcon.appendChild(logoPinIcon2);\nconst main = document.querySelector(\"main\");\nconst centerDiv = document.querySelector(\".centerDiv\");\nconst form = document.querySelector(\"form\");\nconst button = document.querySelector(\"button\");\nconst spanCenter3 = document.querySelector(\".spanCenter3\");\nconst addProject = document.querySelector(\".addProject\");\nconst fieldset = document.querySelector(\"fieldset\");\nconst projectCatcher = document.querySelector(\".projectCatcher\");\nconst addProjectLink = document.querySelector(\".addProjectLink\");\nconst DOMprojectList = document.querySelector(\".DOMprojectList\");\n\nmain.appendChild(centerDiv);\nmain.removeChild(form);\n\nfunction showForm() {\n  main.removeChild(centerDiv);\n  main.appendChild(form);\n\n  const titleInput =\n    document.body.children[1].children[0].children[0].children[2];\n  const descriptionInput =\n    document.body.children[1].children[0].children[0].children[4];\n  const dateInput =\n    document.body.children[1].children[0].children[0].children[6];\n  const priorityInput =\n    document.body.children[1].children[0].children[0].children[8];\n  const projectList = fieldset.children[10];\n\n  // Cleans all the inputs value\n  titleInput.value = \"\";\n  descriptionInput.value = \"\";\n  dateInput.value = \"\";\n  priorityInput.value = \"\";\n  projectCatcher.value = \"\";\n  projectList.value = \"All\";\n\n  if (projectList.hidden === true) projectList.hidden = false;\n}\nwindow.showForm = showForm;\nspanCenter3.addEventListener(\"click\", showForm);\n\nconst taskRepo = [];\nconst projectRepo = [\"All\"];\nlet counter = 0;\nlet tracker = localStorage.getItem(\"counter\");\ntracker = +tracker;\nconsole.log(tracker);\n\nfunction hideForm(e) {\n  main.appendChild(centerDiv);\n  main.removeChild(form);\n  projectCatcher.hidden = true;\n  addProjectLink.hidden = false;\n\n  const title = e.target.parentNode.children[2].value;\n  const description = e.target.parentNode.children[4].value;\n  const date = e.target.parentNode.children[6].value;\n  const priority = e.target.parentNode.children[8].value;\n  let projectList = fieldset.children[10].value;\n\n  let task = { title, description, date, priority, projectList };\n\n  if (tracker == 0) {\n    counter += 1;\n    localStorage.setItem(\"counter\", `${counter}`);\n    localStorage.setItem(`${counter}`, JSON.stringify(task));\n  } else {\n    tracker = +1;\n    localStorage.setItem(\"counter\", `${tracker}`);\n    localStorage.setItem(`${tracker}`, JSON.stringify(task));\n  }\n\n  if (!_services__WEBPACK_IMPORTED_MODULE_0__.onlyLettersAndNumbers(title) && !_services__WEBPACK_IMPORTED_MODULE_0__.onlyLetters(title)) {\n    return;\n  }\n\n  if (!_services__WEBPACK_IMPORTED_MODULE_0__.containsAnyLetters(title)) return;\n\n  if (projectCatcher.value === \"\") {\n    task = { title, description, date, priority, projectList };\n    taskRepo.push(task);\n    return;\n  }\n\n  if (\n    _services__WEBPACK_IMPORTED_MODULE_0__.onlyLetters(projectCatcher.value) ||\n    _services__WEBPACK_IMPORTED_MODULE_0__.onlyLettersAndNumbers(projectCatcher.value)\n  ) {\n    if (\n      // if the project has already been added to projectRepo.\n      _services__WEBPACK_IMPORTED_MODULE_0__.arrWordFinder(projectRepo, projectCatcher.value) ===\n      projectCatcher.value\n    ) {\n      projectList = projectCatcher.value;\n      task = { title, description, date, priority, projectList };\n      taskRepo.push(task);\n      return;\n    }\n\n    projectRepo.push(projectCatcher.value);\n    projectList = projectCatcher.value;\n    _DOM__WEBPACK_IMPORTED_MODULE_1__.appendOption(DOMprojectList, projectCatcher.value);\n  }\n\n  task = { title, description, date, priority, projectList };\n  taskRepo.push(task);\n}\nwindow.hideForm = hideForm;\nbutton.addEventListener(\"click\", hideForm);\n\nfunction projectMaker(e) {\n  const projectList = e.target.parentNode.parentNode.children[10];\n  projectList.hidden = true;\n  projectCatcher.hidden = false;\n  addProjectLink.hidden = true;\n}\nwindow.projectMaker = projectMaker;\naddProject.addEventListener(\"click\", projectMaker);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ1Y7QUFDUjtBQUNEO0FBQ2tCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQ0FBTztBQUN6QixtQkFBbUIsMkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DLDRCQUE0QixRQUFRO0FBQ3BDLElBQUk7QUFDSjtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DLDRCQUE0QixRQUFRO0FBQ3BDOztBQUVBLE9BQU8sNERBQThCLFlBQVksa0RBQW9CO0FBQ3JFO0FBQ0E7O0FBRUEsT0FBTyx5REFBMkI7O0FBRWxDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksa0RBQW9CO0FBQ3hCLElBQUksNERBQThCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksOENBQWdCO0FBQ3BCOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc2VydmljZXMgZnJvbSBcIi4vc2VydmljZXNcIjtcbmltcG9ydCAqIGFzIERPTSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2Zvcm0uY3NzXCI7XG5pbXBvcnQgcGluSWNvbiBmcm9tIFwiLi9pY29ucy9waW4ucG5nXCI7XG5cbmNvbnN0IGxvZ29JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvSWNvblwiKTtcbmNvbnN0IGxvZ29DZW50ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvQ2VudGVySWNvblwiKTtcbmNvbnN0IGxvZ29QaW5JY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBsb2dvUGluSWNvbjIgPSBuZXcgSW1hZ2UoKTtcbmxvZ29QaW5JY29uLnNyYyA9IHBpbkljb247XG5sb2dvUGluSWNvbjIuc3JjID0gcGluSWNvbjtcbmxvZ29JY29uLmFwcGVuZENoaWxkKGxvZ29QaW5JY29uKTtcbmxvZ29DZW50ZXJJY29uLmFwcGVuZENoaWxkKGxvZ29QaW5JY29uMik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBjZW50ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlckRpdlwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG5jb25zdCBzcGFuQ2VudGVyMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BhbkNlbnRlcjNcIik7XG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xuY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZmllbGRzZXRcIik7XG5jb25zdCBwcm9qZWN0Q2F0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENhdGNoZXJcIik7XG5jb25zdCBhZGRQcm9qZWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdExpbmtcIik7XG5jb25zdCBET01wcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRE9NcHJvamVjdExpc3RcIik7XG5cbm1haW4uYXBwZW5kQ2hpbGQoY2VudGVyRGl2KTtcbm1haW4ucmVtb3ZlQ2hpbGQoZm9ybSk7XG5cbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICBtYWluLnJlbW92ZUNoaWxkKGNlbnRlckRpdik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9XG4gICAgZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9XG4gICAgZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlbls0XTtcbiAgY29uc3QgZGF0ZUlucHV0ID1cbiAgICBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzZdO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID1cbiAgICBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzhdO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGZpZWxkc2V0LmNoaWxkcmVuWzEwXTtcblxuICAvLyBDbGVhbnMgYWxsIHRoZSBpbnB1dHMgdmFsdWVcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gXCJcIjtcbiAgcHJvamVjdENhdGNoZXIudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0TGlzdC52YWx1ZSA9IFwiQWxsXCI7XG5cbiAgaWYgKHByb2plY3RMaXN0LmhpZGRlbiA9PT0gdHJ1ZSkgcHJvamVjdExpc3QuaGlkZGVuID0gZmFsc2U7XG59XG53aW5kb3cuc2hvd0Zvcm0gPSBzaG93Rm9ybTtcbnNwYW5DZW50ZXIzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybSk7XG5cbmNvbnN0IHRhc2tSZXBvID0gW107XG5jb25zdCBwcm9qZWN0UmVwbyA9IFtcIkFsbFwiXTtcbmxldCBjb3VudGVyID0gMDtcbmxldCB0cmFja2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudGVyXCIpO1xudHJhY2tlciA9ICt0cmFja2VyO1xuY29uc29sZS5sb2codHJhY2tlcik7XG5cbmZ1bmN0aW9uIGhpZGVGb3JtKGUpIHtcbiAgbWFpbi5hcHBlbmRDaGlsZChjZW50ZXJEaXYpO1xuICBtYWluLnJlbW92ZUNoaWxkKGZvcm0pO1xuICBwcm9qZWN0Q2F0Y2hlci5oaWRkZW4gPSB0cnVlO1xuICBhZGRQcm9qZWN0TGluay5oaWRkZW4gPSBmYWxzZTtcblxuICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMl0udmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbls0XS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bNl0udmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbls4XS52YWx1ZTtcbiAgbGV0IHByb2plY3RMaXN0ID0gZmllbGRzZXQuY2hpbGRyZW5bMTBdLnZhbHVlO1xuXG4gIGxldCB0YXNrID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0TGlzdCB9O1xuXG4gIGlmICh0cmFja2VyID09IDApIHtcbiAgICBjb3VudGVyICs9IDE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIGAke2NvdW50ZXJ9YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Y291bnRlcn1gLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJhY2tlciA9ICsxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBgJHt0cmFja2VyfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RyYWNrZXJ9YCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICB9XG5cbiAgaWYgKCFzZXJ2aWNlcy5vbmx5TGV0dGVyc0FuZE51bWJlcnModGl0bGUpICYmICFzZXJ2aWNlcy5vbmx5TGV0dGVycyh0aXRsZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXNlcnZpY2VzLmNvbnRhaW5zQW55TGV0dGVycyh0aXRsZSkpIHJldHVybjtcblxuICBpZiAocHJvamVjdENhdGNoZXIudmFsdWUgPT09IFwiXCIpIHtcbiAgICB0YXNrID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0TGlzdCB9O1xuICAgIHRhc2tSZXBvLnB1c2godGFzayk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKFxuICAgIHNlcnZpY2VzLm9ubHlMZXR0ZXJzKHByb2plY3RDYXRjaGVyLnZhbHVlKSB8fFxuICAgIHNlcnZpY2VzLm9ubHlMZXR0ZXJzQW5kTnVtYmVycyhwcm9qZWN0Q2F0Y2hlci52YWx1ZSlcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgLy8gaWYgdGhlIHByb2plY3QgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byBwcm9qZWN0UmVwby5cbiAgICAgIHNlcnZpY2VzLmFycldvcmRGaW5kZXIocHJvamVjdFJlcG8sIHByb2plY3RDYXRjaGVyLnZhbHVlKSA9PT1cbiAgICAgIHByb2plY3RDYXRjaGVyLnZhbHVlXG4gICAgKSB7XG4gICAgICBwcm9qZWN0TGlzdCA9IHByb2plY3RDYXRjaGVyLnZhbHVlO1xuICAgICAgdGFzayA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdExpc3QgfTtcbiAgICAgIHRhc2tSZXBvLnB1c2godGFzayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvamVjdFJlcG8ucHVzaChwcm9qZWN0Q2F0Y2hlci52YWx1ZSk7XG4gICAgcHJvamVjdExpc3QgPSBwcm9qZWN0Q2F0Y2hlci52YWx1ZTtcbiAgICBET00uYXBwZW5kT3B0aW9uKERPTXByb2plY3RMaXN0LCBwcm9qZWN0Q2F0Y2hlci52YWx1ZSk7XG4gIH1cblxuICB0YXNrID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0TGlzdCB9O1xuICB0YXNrUmVwby5wdXNoKHRhc2spO1xufVxud2luZG93LmhpZGVGb3JtID0gaGlkZUZvcm07XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVGb3JtKTtcblxuZnVuY3Rpb24gcHJvamVjdE1ha2VyKGUpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bMTBdO1xuICBwcm9qZWN0TGlzdC5oaWRkZW4gPSB0cnVlO1xuICBwcm9qZWN0Q2F0Y2hlci5oaWRkZW4gPSBmYWxzZTtcbiAgYWRkUHJvamVjdExpbmsuaGlkZGVuID0gdHJ1ZTtcbn1cbndpbmRvdy5wcm9qZWN0TWFrZXIgPSBwcm9qZWN0TWFrZXI7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0TWFrZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrWordFinder\": () => (/* binding */ arrWordFinder),\n/* harmony export */   \"arrayBuilder\": () => (/* binding */ arrayBuilder),\n/* harmony export */   \"containsAnyLetters\": () => (/* binding */ containsAnyLetters),\n/* harmony export */   \"onlyLetters\": () => (/* binding */ onlyLetters),\n/* harmony export */   \"onlyLettersAndNumbers\": () => (/* binding */ onlyLettersAndNumbers)\n/* harmony export */ });\n// Ensures that str contains letters and numbers\nfunction onlyLettersAndNumbers(str) {\n  return /^[A-Za-z0-9]*$/.test(str);\n}\n\n// Ensures that str contains only letters\nfunction onlyLetters(str) {\n  return /^[a-zA-Z]+$/.test(str);\n}\n\n// find word on array\nfunction arrWordFinder(array, word) {\n  return array.find((element) => element === `${word}`);\n}\n\n// Ensures that str contains any letters\nfunction containsAnyLetters(str) {\n  return /[a-zA-Z]/.test(str);\n}\n\n// Array constructor\nfunction arrayBuilder(newArray) {\n  return newArray;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsZ0RBQWdELEtBQUs7QUFDckQ7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2VydmljZXMuanM/ODdlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFbnN1cmVzIHRoYXQgc3RyIGNvbnRhaW5zIGxldHRlcnMgYW5kIG51bWJlcnNcbmV4cG9ydCBmdW5jdGlvbiBvbmx5TGV0dGVyc0FuZE51bWJlcnMoc3RyKSB7XG4gIHJldHVybiAvXltBLVphLXowLTldKiQvLnRlc3Qoc3RyKTtcbn1cblxuLy8gRW5zdXJlcyB0aGF0IHN0ciBjb250YWlucyBvbmx5IGxldHRlcnNcbmV4cG9ydCBmdW5jdGlvbiBvbmx5TGV0dGVycyhzdHIpIHtcbiAgcmV0dXJuIC9eW2EtekEtWl0rJC8udGVzdChzdHIpO1xufVxuXG4vLyBmaW5kIHdvcmQgb24gYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiBhcnJXb3JkRmluZGVyKGFycmF5LCB3b3JkKSB7XG4gIHJldHVybiBhcnJheS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBgJHt3b3JkfWApO1xufVxuXG4vLyBFbnN1cmVzIHRoYXQgc3RyIGNvbnRhaW5zIGFueSBsZXR0ZXJzXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnNBbnlMZXR0ZXJzKHN0cikge1xuICByZXR1cm4gL1thLXpBLVpdLy50ZXN0KHN0cik7XG59XG5cbi8vIEFycmF5IGNvbnN0cnVjdG9yXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlCdWlsZGVyKG5ld0FycmF5KSB7XG4gIHJldHVybiBuZXdBcnJheTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services.js\n");

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