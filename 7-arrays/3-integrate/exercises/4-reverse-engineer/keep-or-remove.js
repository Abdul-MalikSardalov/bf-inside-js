alert(`enter as many inputs as you want

when you are done entering strings press 'cancel'
`);

let words = [];
while (true) {
  let input = prompt('enter the next phrase or press "cancel"');
  if (input === null) {
    break;
  }
  if (input === '') {
    alert('nothing is not allowed');
    continue;
  } else {
    words.push(input);
  }
}

let finalArr = [];

for (let item of words) {
  let confirmation = confirm(`do you want to keep ${item}`);
  if (confirmation) {
    finalArr.push(item);
  }
};

const message = `- "${finalArr.join('\n- '}"`;
console.log(message);