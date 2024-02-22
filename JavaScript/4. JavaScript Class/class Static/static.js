let ans = document.getElementById("demo");

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
    static carName(carname){
        return "This is the  " + carname.name;
    }
  }
  
  const myCar = new Car("Ford");
  
  //You can call 'hello()' on the Car Class:
  ans.innerHTML = Car.hello() + "<br>";
  ans.innerHTML += Car.carName(myCar);