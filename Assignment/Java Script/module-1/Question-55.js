// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript?

const text = 'ishaaaaa';
const latter = 'a';
const position = text.lastIndexOf(latter);

if (position !== -1) {
  console.log(`The position of the first occurrence of '${latter}' is ${position}.`);
} else {
  console.log(`'${latter}' not found in the text.`);
}