//append options to select tags
export function appendOption(selectClass, option) {
  let optionMaker = document.createElement("option");
  optionMaker.setAttribute("value", `${option}`);
  optionMaker.innerText = `${option}`;
  return selectClass.appendChild(optionMaker);
}
