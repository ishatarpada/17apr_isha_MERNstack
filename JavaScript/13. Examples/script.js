let content = document.getElementById("demo");
// let attr1 = document.getElementById("content");

// JavaScript can change HTML content.
content.innerHTML = " javascript content";


// JavaScript can change HTML attribute values.
content.className = "content";

// JavaScript can change the style of an HTML element.
content.style.color = "red";

// javascript can hide the element
content.style.display = "none";
content.style.display = "block";

// insert javascript
/*
    1. in head tag using script tag
    2. in body tag using script tag
    3. in body tag using external url/link
*/

// js output
/*
    1. document.write
    2. console.log
    3. .innerHTML
    4. alert box
*/

// syntax :-
// statement

/* conditional
    1. if
    2. if-else
    3. else-if
    4. switch

    looping 
    1. for loop
    2. while loop
    3. do-while loop
    4. for-in
    5. for each
    6. for-of
*/


console.log("isha" + " tarpada");
console.log("isha" + " " + "tarpada");
console.log(5 + 3);
console.log("5" + 3);
console.log(3 + "5" + 3);
console.log(3 + 5 + "3");

const str = "isha";
const num = 52;
const arr = ["isha" , 53];
const obj = {"name" : "isha" ,"age" : 53 , "city" : "rajkot"}
let car;
const arr1 = [];

const person = {
    "name" : "isha" ,
    "lName" : "Tarpada" ,
    "age" : 21 ,
    "city" : "rajkot" ,
    fullName : function (){
        return this.name + " " + this.lName;
    }
}


function add(){
    return 5 + 3 ;
}


function sub(a , b){
    return a - b;
}

function func(feranhit){
    return (5/9) * (feranhit-32);
}

const str1 = 'isha';
const str2 = "\"isha\"";
let text = "Please locate where 'locate' occurs!";

const num1 = 32;
const num2 = 56.23;
const num3 = 56e6;
const num4 = 56e-6;

const date = new Date();

const array = [1 , 2 , 3 , 4 , 5 , 6];
const array1 = [1 , 2 , 3 , 4 , 5 , 6];
const fruits = ["Banana", "Orange", "Apple", "Mango"];