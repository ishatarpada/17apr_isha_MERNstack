console.log("Hey there ! I am JS ");
console.log("hello");

// console.log(window);


const math = require('./math');
console.log(math.add(5, 6));
console.log(math.sub(5, 6));
console.log(math.mul(5, 6));
console.log(math.div(55, 5));

const { add, sub, mul, div } = require('./math');
console.log(add(5, 6));
console.log(sub(5, 6));
console.log(mul(5, 6));
console.log(div(55, 5));
