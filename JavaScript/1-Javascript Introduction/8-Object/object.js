const person_info = {
    //properties
    firstName: "isha",
    lastName: "Tarpada",
    age: 21,

    //methods
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

let info = document.getElementById("demo");

info.innerHTML = person_info.firstName + " is " + person_info.age + " years old. " + "<br>" + "<br>";

// Accessing Object Properties
info.innerHTML += " First Name is " + person_info.firstName + "<br>";
info.innerHTML += " Last Name is " + person_info.lastName + "<br>" ;
info.innerHTML += " age is " + person_info["age"] + "<br>" + "<br>";

// Accessing Object Methods

info.innerHTML += " => display the function return value <br>"
info.innerHTML += " Full Name is " + person_info.fullName()+ "<br>" + "<br>"; 
info.innerHTML += " => display the function definition <br>"
info.innerHTML += " Full Name is " + person_info.fullName + "<br>"; 