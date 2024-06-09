// Use console.log() and escape characters to print the following pattern in JS?
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125


for (let i = 1; i <= 5; i++) {
    let row = `${i} 1 ${i} ${i*i} ${i*i*i}`;
    console.log(row);
}

