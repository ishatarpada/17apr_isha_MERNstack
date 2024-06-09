// Check Number Is Positive or Negative in JavaScript? 

function CheckNum(num){
    if(num > 0){
        console.log("number is positive");
    }
    else if(num < 0){
        console.log("Number is negative");
    }
    else{
        console.log("Number is zero");
    }
}

CheckNum(0);
CheckNum(10);
CheckNum(-10);