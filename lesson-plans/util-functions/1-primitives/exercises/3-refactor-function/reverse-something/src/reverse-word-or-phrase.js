import {
  readString,
  readSelection,
  display,
} from '../../../../../../../lib/dom-io.js';

import { reverse } from './utils/reverse.js';

const reverseWordOrPhrase = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');
  const reverseType = readSelection('reverse-type');

  // --- reverse either the whole thing or each word ---
  let reversed = '';
  if (reverseType === 'each') {
    const splitText = userText.split(' ');
    const newWords = [];

    for (const word of splitText) {
      const reversedWord = reverse(word);
      newWords.push(reversedWord);
    }

    reversed = newWords.join(' ');
  } else {
    reversed = reverse(userText);
  }

  // --- display the reversed input ---
  display('reversed-output', reversed);
};

document.getElementById('do-it').addEventListener('click', reverseWordOrPhrase);

