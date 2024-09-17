// Write a JavaScript program to calculate days left until next Christmas?

let currentDate = new Date();
let christmasDate = new Date(2024, 11, 25)

console.log(currentDate);
console.log(christmasDate);

let timeDiff = christmasDate.getTime() - currentDate.getTime();

let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

console.log(daysLeft);