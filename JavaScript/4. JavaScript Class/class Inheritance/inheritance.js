let ans = document.getElementById("demo");

class Person {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        return "My name is " + this.name;
    }

    get personName() {
        return this.name;
    }

    set personName(newName) {
        this.name = newName;
    }
}

class MyInfo extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    showInfo() {
        return this.displayName() + " I am " + this.age + " years old <br>";
    }
}

let info = new MyInfo("Isha Patel", 21);
ans.innerHTML += info.showInfo() + "<br>";
let newInfo = new Person("Isha Patel");
ans.innerHTML += newInfo.personName + "<br>";
newInfo.personName = "Disha Patel"; // Using the setter
ans.innerHTML += newInfo.personName + "<br>"; // Using the getter
