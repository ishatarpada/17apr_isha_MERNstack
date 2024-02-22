const ans = document.getElementById("demo");

const person = {
    fName : "Isha" , 
    lName : "Patel" ,
    age : 21 ,
    dob : "19/11/2002"
}
ans.innerHTML = " Person information is &#10170 " + person.fName + " , " + person.lName + " , " + person.age + " , " + person.dob +   "<br><br>"

const fruits = [" apple ", " mango ", " cherry ", " strawberry "];
ans.innerHTML += "Fruits is  &#10140;  " + fruits + "<br><br>";

const numbers = [45, 4, 9, 16, 25];
ans.innerHTML += "numbers is  &#10140;  " + numbers + "<br><br>";

// print info using for-in loop
ans.innerHTML += " Person Info is &#10170";
for(let i in person){
    ans.innerHTML += person[i] + "  ";
}
ans.innerHTML += "<br><br>";

// print fruits using for-in loop
ans.innerHTML += " Fruits is &#10170";
for(let i in fruits){
    ans.innerHTML += fruits[i] + "  ";
}
ans.innerHTML += "<br><br>";

// print numbers using for-in loop
ans.innerHTML += " numbers is &#10170";
for(let i in numbers){
    ans.innerHTML += numbers[i] + "  ";
}
ans.innerHTML += "<br><br>";

// forEach() :- calls a function (a callback function) once for each array element.
numbers.forEach(printNum);

function printNum(value , index , array){
    ans.innerHTML += value + "  ";
}
ans.innerHTML += "<br><br>";


fruits.forEach(printFruits);

function printFruits(value , index , array){
    ans.innerHTML += value + "  ";
}
ans.innerHTML += "<br><br>";
