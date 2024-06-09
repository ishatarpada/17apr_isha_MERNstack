// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 0; j < i; j++) {
      row += (j % 2 === 0 ? '1' : '0') + ' ';
  }
  console.log(row);
}
