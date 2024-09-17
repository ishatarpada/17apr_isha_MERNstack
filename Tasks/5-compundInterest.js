let p = parseInt(prompt("Enter the principal amount  "));
let r = parseInt(prompt("enter the  rate of interest  "));
let n = parseInt(prompt("enter the umber of times the interest is compounded annually "));

// let interest = p * ( 1 +  (r / n));
// let compoundedInterest = Math.pow(interest , (n*t))

let compoundedInterest = p * (Math.pow((1+(r/100)) ,n));

alert("compounded Interest is -> " + compoundedInterest);