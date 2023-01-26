// append options to select tags
export function appendOption(selectClass, option) {
  const optionMaker = document.createElement("option");
  optionMaker.classList.add("auto");
  optionMaker.setAttribute("value", `${option}`);
  optionMaker.innerText = `${option}`;
  return selectClass.appendChild(optionMaker);
}
