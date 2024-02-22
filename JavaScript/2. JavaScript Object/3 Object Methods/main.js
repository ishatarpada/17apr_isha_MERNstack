let ans = document.getElementById("demo");


// create the method of object

const circle = {
    radius : 5 ,
    area : function(){
        return Math.PI * this.radius * this.radius;
    } ,
    diameter : function(){
        return 2 * this.radius ;
    } 
}

// Accessing Object Methods

ans.innerHTML += "circle.area() &#10170;" +  circle.area() + "<br>";
ans.innerHTML += "circle.diameter() &#10170;" +  circle.diameter() + "<br><br>";

// Adding a Method to an Object
circle.circumference = function(){
    return 2 * Math.PI * this.radius;
}
ans.innerHTML += "circle.circumference() &#10170;" +  circle.circumference() + "<br><br>";

// Using Built-In Methods :
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
  person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  
 ans.innerHTML +=
  "My father is " + person.name() + "<br><br>"; 