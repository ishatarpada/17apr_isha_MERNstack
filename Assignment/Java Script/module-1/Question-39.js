// A
// B C
// D E F
// G H I J
// K L M N O

let charCode = 65; 
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += String.fromCharCode(charCode++) + ' ';
    }
    console.log(row);
}