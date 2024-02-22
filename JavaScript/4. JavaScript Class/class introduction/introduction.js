let ans = document.getElementById("demo");

class person{
    constructor(fName , lName , dobYear){
        this.fName = fName;
        this.lName = lName;
        this.dobYear = dobYear;
    }
    fullName() {
        return this.fName + this.lName;
    }

    age(){
        const date = new Date();
        return date.getFullYear() - this.dobYear;
    }
}

const info = new person("isha " , "Patel " , 2002);
ans.innerHTML += " My Name is " + info.fullName() + "and i am " + info.age() + " years old <br>";

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      // date = new Date();  // This will not work
      const date = new Date(); // This will work
      return date.getFullYear() - this.year;
    }
  }