let ans = document.getElementById("demo");

const person = {

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullDetails: function (city, country) {
    return this.firstName + " " + this.lastName + " " + country + " " + city;
  }
}

const person1 = {
  firstName: "Isha",
  lastName: "Patel"
}
const person2 = {
  firstName: "Viraj",
  lastName: "Patel"
}


ans.innerHTML += "Full Name is " + person.fullName.call(person1) + "<br>";
ans.innerHTML += "Full Details is " + person.fullDetails.call(person1, "Oslo", "Norway") + "<br>";
ans.innerHTML += "Full Name is " + person.fullName.call(person2) + "<br>";  