export const unicodeShuffle = (text = '', shift = 0) => {
  let encodedString = '';

  for (const character of text) {
    const characterCode = character.charCodeAt();
    const newCharCode = characterCode + shift;
    const encodedCharcter = String.fromCharCode(newCharCode);
    encodedString += encodedCharcter;
  }

  return encodedString;
};

console.log(unicodeShuffle('abcde', 100001));
