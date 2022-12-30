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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/services.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.css */ \"./src/form.css\");\n/* harmony import */ var _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/pin.png */ \"./src/icons/pin.png\");\n\n\n\n\n\n\nconst logoIcon = document.querySelector(\".logoIcon\");\nconst logoCenterIcon = document.querySelector(\".logoCenterIcon\");\nconst logoPinIcon = new Image();\nconst logoPinIcon2 = new Image();\nlogoPinIcon.src = _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__;\nlogoPinIcon2.src = _icons_pin_png__WEBPACK_IMPORTED_MODULE_4__;\nlogoIcon.appendChild(logoPinIcon);\nlogoCenterIcon.appendChild(logoPinIcon2);\nconst main = document.querySelector(\"main\");\nconst centerDiv = document.querySelector(\".centerDiv\");\nconst form = document.querySelector(\"form\");\nconst button = document.querySelector(\"button\");\nconst spanCenter3 = document.querySelector(\".spanCenter3\");\nconst addProject = document.querySelector(\".addProject\");\nconst fieldset = document.querySelector(\"fieldset\");\nconst projectCatcher = document.querySelector(\".projectCatcher\");\nconst addProjectLink = document.querySelector(\".addProjectLink\");\nconst DOMprojectList = document.querySelector(\".DOMprojectList\");\n\nmain.appendChild(centerDiv);\nmain.removeChild(form);\n\nfunction showForm() {\n  main.removeChild(centerDiv);\n  main.appendChild(form);\n\n  const titleInput =\n    document.body.children[1].children[0].children[0].children[2];\n  const descriptionInput =\n    document.body.children[1].children[0].children[0].children[4];\n  const dateInput =\n    document.body.children[1].children[0].children[0].children[6];\n  const priorityInput =\n    document.body.children[1].children[0].children[0].children[8];\n  const projectList = fieldset.children[10];\n\n  // Cleans all the inputs value\n  titleInput.value = \"\";\n  descriptionInput.value = \"\";\n  dateInput.value = \"\";\n  priorityInput.value = \"\";\n  projectCatcher.value = \"\";\n  projectList.value = \"All\";\n\n  if (projectList.hidden === true) projectList.hidden = false;\n}\nwindow.showForm = showForm;\nspanCenter3.addEventListener(\"click\", showForm);\n\nconst taskRepo = [];\nconst projectRepo = [\"All\"];\n\nfunction hideForm(e) {\n  main.appendChild(centerDiv);\n  main.removeChild(form);\n  projectCatcher.hidden = true;\n  addProjectLink.hidden = false;\n\n  const title = e.target.parentNode.children[2].value;\n  const description = e.target.parentNode.children[4].value;\n  const date = e.target.parentNode.children[6].value;\n  const priority = e.target.parentNode.children[8].value;\n  let projectList = fieldset.children[10].value;\n\n  let task = { title, description, date, priority, projectList };\n  if (!_services__WEBPACK_IMPORTED_MODULE_0__.onlyLettersAndNumbers(title) && !_services__WEBPACK_IMPORTED_MODULE_0__.onlyLetters(title)) {\n    return;\n  }\n\n  if (!_services__WEBPACK_IMPORTED_MODULE_0__.containsAnyLetters(title)) return;\n\n  console.log(projectList);\n\n  if (projectCatcher.value === \"\") {\n    task = { title, description, date, priority, projectList };\n    taskRepo.push(task);\n    console.log(taskRepo);\n    return;\n  }\n\n  if (\n    _services__WEBPACK_IMPORTED_MODULE_0__.onlyLetters(projectCatcher.value) ||\n    _services__WEBPACK_IMPORTED_MODULE_0__.onlyLettersAndNumbers(projectCatcher.value)\n  ) {\n    if (\n      // if the project has already been added to projectRepo.\n      _services__WEBPACK_IMPORTED_MODULE_0__.arrWordFinder(projectRepo, projectCatcher.value) ===\n      projectCatcher.value\n    ) {\n      projectList = projectCatcher.value;\n      task = { title, description, date, priority, projectList };\n      taskRepo.push(task);\n      console.log(taskRepo);\n      return;\n    }\n\n    projectRepo.push(projectCatcher.value);\n    projectList = projectCatcher.value;\n    _DOM__WEBPACK_IMPORTED_MODULE_1__.appendOption(DOMprojectList, projectCatcher.value);\n  }\n\n  task = { title, description, date, priority, projectList };\n  taskRepo.push(task);\n  console.log(taskRepo);\n}\nwindow.hideForm = hideForm;\nbutton.addEventListener(\"click\", hideForm);\n\nfunction projectMaker(e) {\n  const projectList = e.target.parentNode.parentNode.children[10];\n  projectList.hidden = true;\n  projectCatcher.hidden = false;\n  addProjectLink.hidden = true;\n}\nwindow.projectMaker = projectMaker;\naddProject.addEventListener(\"click\", projectMaker);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ1Y7QUFDUjtBQUNEO0FBQ2tCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQ0FBTztBQUN6QixtQkFBbUIsMkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2YsT0FBTyw0REFBOEIsWUFBWSxrREFBb0I7QUFDckU7QUFDQTs7QUFFQSxPQUFPLHlEQUEyQjs7QUFFbEM7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtEQUFvQjtBQUN4QixJQUFJLDREQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFzQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksOENBQWdCO0FBQ3BCOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzZXJ2aWNlcyBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4vZm9ybS5jc3NcIjtcbmltcG9ydCBwaW5JY29uIGZyb20gXCIuL2ljb25zL3Bpbi5wbmdcIjtcblxuY29uc3QgbG9nb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29JY29uXCIpO1xuY29uc3QgbG9nb0NlbnRlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29DZW50ZXJJY29uXCIpO1xuY29uc3QgbG9nb1Bpbkljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGxvZ29QaW5JY29uMiA9IG5ldyBJbWFnZSgpO1xubG9nb1Bpbkljb24uc3JjID0gcGluSWNvbjtcbmxvZ29QaW5JY29uMi5zcmMgPSBwaW5JY29uO1xubG9nb0ljb24uYXBwZW5kQ2hpbGQobG9nb1Bpbkljb24pO1xubG9nb0NlbnRlckljb24uYXBwZW5kQ2hpbGQobG9nb1Bpbkljb24yKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IGNlbnRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VudGVyRGl2XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbmNvbnN0IHNwYW5DZW50ZXIzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGFuQ2VudGVyM1wiKTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIik7XG5jb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmaWVsZHNldFwiKTtcbmNvbnN0IHByb2plY3RDYXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q2F0Y2hlclwiKTtcbmNvbnN0IGFkZFByb2plY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0TGlua1wiKTtcbmNvbnN0IERPTXByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ET01wcm9qZWN0TGlzdFwiKTtcblxubWFpbi5hcHBlbmRDaGlsZChjZW50ZXJEaXYpO1xubWFpbi5yZW1vdmVDaGlsZChmb3JtKTtcblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gIG1haW4ucmVtb3ZlQ2hpbGQoY2VudGVyRGl2KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID1cbiAgICBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID1cbiAgICBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzRdO1xuICBjb25zdCBkYXRlSW5wdXQgPVxuICAgIGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bNl07XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPVxuICAgIGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bOF07XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZmllbGRzZXQuY2hpbGRyZW5bMTBdO1xuXG4gIC8vIENsZWFucyBhbGwgdGhlIGlucHV0cyB2YWx1ZVxuICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0Q2F0Y2hlci52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3RMaXN0LnZhbHVlID0gXCJBbGxcIjtcblxuICBpZiAocHJvamVjdExpc3QuaGlkZGVuID09PSB0cnVlKSBwcm9qZWN0TGlzdC5oaWRkZW4gPSBmYWxzZTtcbn1cbndpbmRvdy5zaG93Rm9ybSA9IHNob3dGb3JtO1xuc3BhbkNlbnRlcjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcblxuY29uc3QgdGFza1JlcG8gPSBbXTtcbmNvbnN0IHByb2plY3RSZXBvID0gW1wiQWxsXCJdO1xuXG5mdW5jdGlvbiBoaWRlRm9ybShlKSB7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2VudGVyRGl2KTtcbiAgbWFpbi5yZW1vdmVDaGlsZChmb3JtKTtcbiAgcHJvamVjdENhdGNoZXIuaGlkZGVuID0gdHJ1ZTtcbiAgYWRkUHJvamVjdExpbmsuaGlkZGVuID0gZmFsc2U7XG5cbiAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzJdLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bNF0udmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzZdLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bOF0udmFsdWU7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGZpZWxkc2V0LmNoaWxkcmVuWzEwXS52YWx1ZTtcblxuICBsZXQgdGFzayA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdExpc3QgfTtcbiAgaWYgKCFzZXJ2aWNlcy5vbmx5TGV0dGVyc0FuZE51bWJlcnModGl0bGUpICYmICFzZXJ2aWNlcy5vbmx5TGV0dGVycyh0aXRsZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXNlcnZpY2VzLmNvbnRhaW5zQW55TGV0dGVycyh0aXRsZSkpIHJldHVybjtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG5cbiAgaWYgKHByb2plY3RDYXRjaGVyLnZhbHVlID09PSBcIlwiKSB7XG4gICAgdGFzayA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdExpc3QgfTtcbiAgICB0YXNrUmVwby5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tSZXBvKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoXG4gICAgc2VydmljZXMub25seUxldHRlcnMocHJvamVjdENhdGNoZXIudmFsdWUpIHx8XG4gICAgc2VydmljZXMub25seUxldHRlcnNBbmROdW1iZXJzKHByb2plY3RDYXRjaGVyLnZhbHVlKVxuICApIHtcbiAgICBpZiAoXG4gICAgICAvLyBpZiB0aGUgcHJvamVjdCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHByb2plY3RSZXBvLlxuICAgICAgc2VydmljZXMuYXJyV29yZEZpbmRlcihwcm9qZWN0UmVwbywgcHJvamVjdENhdGNoZXIudmFsdWUpID09PVxuICAgICAgcHJvamVjdENhdGNoZXIudmFsdWVcbiAgICApIHtcbiAgICAgIHByb2plY3RMaXN0ID0gcHJvamVjdENhdGNoZXIudmFsdWU7XG4gICAgICB0YXNrID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0TGlzdCB9O1xuICAgICAgdGFza1JlcG8ucHVzaCh0YXNrKTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tSZXBvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0UmVwby5wdXNoKHByb2plY3RDYXRjaGVyLnZhbHVlKTtcbiAgICBwcm9qZWN0TGlzdCA9IHByb2plY3RDYXRjaGVyLnZhbHVlO1xuICAgIERPTS5hcHBlbmRPcHRpb24oRE9NcHJvamVjdExpc3QsIHByb2plY3RDYXRjaGVyLnZhbHVlKTtcbiAgfVxuXG4gIHRhc2sgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3RMaXN0IH07XG4gIHRhc2tSZXBvLnB1c2godGFzayk7XG4gIGNvbnNvbGUubG9nKHRhc2tSZXBvKTtcbn1cbndpbmRvdy5oaWRlRm9ybSA9IGhpZGVGb3JtO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlRm9ybSk7XG5cbmZ1bmN0aW9uIHByb2plY3RNYWtlcihlKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzEwXTtcbiAgcHJvamVjdExpc3QuaGlkZGVuID0gdHJ1ZTtcbiAgcHJvamVjdENhdGNoZXIuaGlkZGVuID0gZmFsc2U7XG4gIGFkZFByb2plY3RMaW5rLmhpZGRlbiA9IHRydWU7XG59XG53aW5kb3cucHJvamVjdE1ha2VyID0gcHJvamVjdE1ha2VyO1xuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdE1ha2VyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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