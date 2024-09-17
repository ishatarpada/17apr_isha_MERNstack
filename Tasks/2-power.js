// W.A.P to create a power of any numbers

let num = parseInt(prompt("enter the number"));
let exponent = parseInt(prompt("Enter the exponent"));

let pow = 1;
for(let i = 0 ; i < exponent ; i++){
    pow *= num;
}
alert("The result of " + num + " raised to the power of " + exponent + " is: " + pow);