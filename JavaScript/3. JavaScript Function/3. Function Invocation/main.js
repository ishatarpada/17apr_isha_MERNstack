let ans = document.getElementById("demo");

// Invoking a Function as a Function
function multiplication(a, b) {
    return a * b;
}
ans.innerHTML += "multiplication(10, 2) &#10170; " + multiplication(10, 2) + "<br>";
ans.innerHTML += "window.multiplication(10, 2) &#10170; " + window.multiplication(10, 2) + "<br>";


// The Global Object
let x = myFunction();            // x will be the window object
ans.innerHTML += "x is &#10170; " + x + "<br>";
function myFunction() {
    return this;
}

// Invoking a Function as a Method
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    } ,
    age : function(){
        return this;
    }
}

ans.innerHTML += "Full Name is &#10170; " + person.fullName() + "<br>";
ans.innerHTML += "age is &#10170; " + person.age() + "<br>";

function personInfo(arg1 , arg2 , arg3){
    this.firstName = arg1;
    this.lastName = arg2;
    this.age = arg3;
    this.fullName = arg1 + " " + arg2;
}

const objPerson = new personInfo("Isha" , "Patel" , 21);
const objPerson1 = new personInfo("Viraj" , "Patel" , 17);

ans.innerHTML += "My Name is " + objPerson.fullName + " i am a " + objPerson.age + "year old and my brother name is " + objPerson1.fullName + " he is a " + objPerson1.age + " year old <br>"

