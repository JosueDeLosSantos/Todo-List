// Ensures that str contains letters and numbers
export function onlyLettersAndNumbers(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}

// Ensures that str contains only letters
export function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// find element on array
export function arrElementFinder(array, element) {
  return array.find((index) => index === `${element}`);
}

// find element on array and return new array without such element
export function arrElementKiller(array, element) {
  array.forEach((index) => {
    if (array[index] === element) {
      array.splice(index, 1);
    }
  });
  return array;
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
