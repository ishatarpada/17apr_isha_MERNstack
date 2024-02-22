let ans = document.getElementById("demo");

const flowers = new Object();
flowers.red = "Rose";
flowers.yellow = "sunflower";
flowers.pink = "Lotus";
flowers.white = "Jasmine";
flowers.purple = "Lavender";


ans.innerHTML += "flowers.red &#10170; " + flowers.red + "<br>";
ans.innerHTML += "flowers.yellow &#10170; " + flowers.yellow + "<br>";
ans.innerHTML += "flowers.pink &#10170; " + flowers.pink + "<br>";
ans.innerHTML += "flowers.white &#10170; " + flowers.white + "<br>";
ans.innerHTML += "flowers.purple &#10170; " + flowers.purple + "<br><br>";


for (i in flowers) {
    ans.innerHTML += "flowers[" + i + "] &#10170; " + flowers[i] + "<br>";
}
ans.innerHTML += "<br>"

const myArray = Object.values(flowers);
ans.innerHTML += myArray + "<br><br>";

let string = JSON.stringify(flowers);
ans.innerHTML += string + "<br><br><br>";

const person = {
    firstName: "isha ",
    lastName: "Patel",
    age: 21,
    date: new Date(),
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

let str_1 = JSON.stringify(person);
ans.innerHTML += str_1 + "<br><br>"

person.fullName = person.fullName.toString();
let str = JSON.stringify(person);
ans.innerHTML += str + "<br><br>"

const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
ans.innerHTML += myString;