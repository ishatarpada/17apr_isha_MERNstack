//without return type without parameter

function addition(){
    let a = parseInt(document.getElementById("fno").value);
    let b = parseInt(document.getElementById("sno").value);
    let c = document.getElementById("ans")

    let result = a + b ;
    c.innerHTML = "answer is " + result;    
}


function substraction(){
    let a = parseInt(document.getElementById("fno").value);
    let b = parseInt(document.getElementById("sno").value);
    let c = document.getElementById("ans")

    let result = a - b ;
    c.innerHTML = "answer is " + result;    
}


function multiplication(){
    let a = parseInt(document.getElementById("fno").value);
    let b = parseInt(document.getElementById("sno").value);
    let c = document.getElementById("ans")

    let result = a * b ;
    c.innerHTML = "answer is " + result;    
}


function division(){
    let a = parseInt(document.getElementById("fno").value);
    let b = parseInt(document.getElementById("sno").value);
    let c = document.getElementById("ans")

    if (b === 0) {
        c.innerHTML = "Cannot divide by zero";
    } else {
        let result = a / b;
        c.innerHTML = "answer is: " + result;
    }   
}

function modulo(){
    let a = parseInt(document.getElementById("fno").value);
    let b = parseInt(document.getElementById("sno").value);
    let c = document.getElementById("ans")

    if (b === 0) {
        c.innerHTML = "Undefined (Modulo by zero)";
    } else {
        let result = a % b;
        c.innerHTML = "answer is: " + result;
    } 
}