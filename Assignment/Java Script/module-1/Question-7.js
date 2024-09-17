//Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

let num1 = '10';
let num2 = 10;

if (typeof (num1) === typeof (num2)) {
    alert("num1 and num2 are of the same type.");
} else {
    alert("num1 and num2 are not of the same type.");
}

if (typeof (num1) !== 'number') {
    num1 = parseInt(num1);
    console.log(num1);
    console.log(typeof (num1));
}