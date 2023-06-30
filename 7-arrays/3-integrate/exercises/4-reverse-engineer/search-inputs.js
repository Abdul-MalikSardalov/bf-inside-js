import { findTheCharacter } from '../utils/add-to-numbers.js'

alert(`enter as many pharases as you want

then write a search query (case sensative)
-> only pharases that include query will be kept
`);

const newArr = [];

while (true) {
  let userInput = prompt('enter some text or click "cancel"');
  if (!userInput) {
    break;
  } else newArr.push(userInput);
}

let userChar = prompt('enter a search query');

let result = findTheCharacter(newArr, userChar);

// console.log(result);

let message = alert(`query: ${userChar}

matches: 
${result}`);
