let ans = document.getElementById("demo");

function Person(fnm , lnm , age , eye){
    this.firstName = fnm;
    this.lastName = lnm ;
    this.age = age;
    this.eyeColor = eye;
}

const objPerson = new Person("isha" , "Patel" , 21 , "black");

ans.innerHTML += "My name is " + objPerson.firstName + " " + objPerson.lastName + " i'm " + objPerson.age + " year old";

for(i in Person){
    ans.innerHTML += "person [" + i + " ]  &#10170; " + Person[i] + "<br>";
}
ans.innerHTML += "<br><br>";

// adding this property only objPerson.
objPerson.skills = "Cooking";
ans.innerHTML += "i like  " + objPerson.skills + "<br>";

// adding the method in object.
objPerson.fullName = function(){
    return this.firstName + " " + this.lastName ;
}

ans.innerHTML += "my Name is " + objPerson.fullName() + "<br>";

// Adding a Property to a Constructor

//Person.hobby = "drawing";  this type can not add property to a constructor function
// add property we must add in property to a constructor function

// Adding a Method to a Constructor

function Rectangle(length , width){
    // add property
    this.length = length;
    this.width = width;

    // add  method
    this.area = function(){
        return this.length * this.width;
    }

    this.changeWidth = function(width){
        this.width = width;
    }
}

// built in javascript constructor.
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object