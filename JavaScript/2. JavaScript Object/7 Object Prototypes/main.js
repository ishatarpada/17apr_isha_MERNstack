let ans = document.getElementById("demo");

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

ans.innerHTML += myFather.age + "<br>";
ans.innerHTML += myMother.firstName + " " + myMother.lastName + "<br>";

// Adding Properties and Methods to Objects Using the prototype Property.

Person.prototype.skill = "cooking";
Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}