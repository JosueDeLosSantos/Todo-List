// Ensures that str contains letters and numbers
export function onlyLettersAndNumbers(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}

// Ensures that str contains only letters
export function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// find word on array
export function arrWordFinder(array, word) {
  return array.find((element) => element === `${word}`);
}

// Ensures that str contains any letters
export function containsAnyLetters(str) {
  return /[a-zA-Z]/.test(str);
}

// Ensures that str contains any numbers
export function containsNumbers(str) {
  return /\d/.test(str);
}

// Returns an array without duplicates
export function noDupArray(array) {
  return Array.from(new Set(array));
}
