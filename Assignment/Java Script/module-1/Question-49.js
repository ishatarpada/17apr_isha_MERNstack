// Write a JavaScript program to clone an array?

let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
console.log(clonedArray);

let originalArray1 = [1, 2, 3];
let clonedArray1 = originalArray1.concat();
console.log(clonedArray1); 


let originalArray2 = [1, 2, 3];
let clonedArray2 = Array.from(originalArray2);
console.log(clonedArray2);


