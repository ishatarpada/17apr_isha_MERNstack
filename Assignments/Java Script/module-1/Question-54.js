// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript?

const text = '30 Days Of JavaScript';
const latter = 'a';
const position = text.indexOf(latter);

if (position !== -1) {
  console.log(`The position of the first occurrence of '${latter}' is ${position}.`);
} else {
  console.log(`'${latter}' not found in the text.`);
}
