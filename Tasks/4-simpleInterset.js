let p = parseInt(prompt("Enter the initial principal balance =>  "));
let r = parseInt(prompt("enter the annual interest rate =>  "));
let t = parseInt(prompt("enter the time in years   =>  "));

let simpleInterest = (p * r * t)/100;

alert("simple Interest is &#10170; " + simpleInterest);