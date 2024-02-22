let ans = document.getElementById("demo");

const flowers = new Object();
flowers.red = "Rose";
flowers.yellow = "sunflower";
flowers.pink = "Lotus";
flowers.white = "Jasmine";
flowers.purple = "Lavender";

const red = "red";
const yellow = "yellow";
const pink = "pink";
const white = "white";
const purple = "purple";

ans.innerHTML += "flowers.red &#10170; " + flowers.red + "<br>";
ans.innerHTML += "flowers.yellow &#10170; " + flowers.yellow + "<br>";
ans.innerHTML += "flowers.pink &#10170; " + flowers.pink + "<br>";
ans.innerHTML += "flowers.white &#10170; " + flowers.white + "<br>";
ans.innerHTML += "flowers.purple &#10170; " + flowers.purple + "<br><br>";

ans.innerHTML += 'flowers["red"] &#10170; ' + flowers["red"] + "<br>";
ans.innerHTML += 'flowers["yellow"] &#10170; ' + flowers["yellow"] + "<br>";
ans.innerHTML += 'flowers["pink"] &#10170; ' + flowers["pink"] + "<br>";
ans.innerHTML += 'flowers["white"] &#10170; ' + flowers["white"] + "<br>";
ans.innerHTML += 'flowers["purple"] &#10170; ' + flowers["purple"] + "<br><br>";


ans.innerHTML += 'flowers[red] &#10170; ' + flowers[red] + "<br>";
ans.innerHTML += 'flowers[yellow] &#10170; ' + flowers[yellow] + "<br>";
ans.innerHTML += 'flowers[pink] &#10170; ' + flowers[pink] + "<br>";
ans.innerHTML += 'flowers[white] &#10170; ' + flowers[white] + "<br>";
ans.innerHTML += 'flowers[purple] &#10170; ' + flowers[purple] + "<br><br>";

for (i in flowers) {
    ans.innerHTML += "flowers[" + i + "] &#10170; " + flowers[i] + "<br>";
}
ans.innerHTML += "<br>"

// adding a new Property
flowers.orange = "Tulip";
flowers.blue = "Cornflower";
flowers.blue = "Rosa";

for (i in flowers) {
    ans.innerHTML += "flowers[" + i + "] &#10170; " + flowers[i] + "<br>";
}

ans.innerHTML += "<br>"

// delete the property
delete flowers.orange;
for (i in flowers) {
    ans.innerHTML += "flowers[" + i + "] &#10170; " + flowers[i] + "<br>";
}

ans.innerHTML += "<br>"

const personInfo = {
    fisrtName: "isha",
    lastName: "Patel",
    age: 21,

    skills: {
        webDev: "HTML CSS JS",
        programming: "C C++",
        database: "mysql"
    }
}

for (i in personInfo) {
    ans.innerHTML += "personInfo[" + i + "] &#10170; " + personInfo[i] + "<br>";
}

ans.innerHTML += "personInfo.skills.webDev  &#10170; " + personInfo.skills.webDev + "<br>";
ans.innerHTML += "personInfo.skills.programming  &#10170; " + personInfo.skills.programming + "<br>";
ans.innerHTML += "personInfo.skills.database  &#10170; " + personInfo.skills.database + "<br><br>";

// Nested Arrays and Objects : Values in objects can be arrays, and values in arrays can be objects

// 1. object with array value :
let person = {
    name: "John",
    hobbies: ["reading", "coding", "traveling"] , 
    food : ["pizza" , "shake" , "ice-cream"]
};
ans.innerHTML += `<b>object with array value</b><br><br>`;
for(i in person.hobbies){
    ans.innerHTML += "person.hobbies[" + i + "] &#10170; " + person.hobbies[i] + "<br>" ;
}
ans.innerHTML += "<br>"

for(i in person.food){
    ans.innerHTML += " person.food[" + i + "] &#10170; " + person.food[i] + "<br>";
}
ans.innerHTML += "<br>"

// 2. array with object value :
let people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Joe", age: 35 }
];

// 3. array with array value :
let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//    4. object with object value :
let nestedObject = {
    person1: { name: "John", age: 25 },
    person2: { name: "Jane", age: 30 },
    person3: { name: "Joe", age: 35 }
};

// 5. array with mix values 
let mixedArray = [
    1,
    "Hello",
    { name: "John", age: 25 },
    [1, 2, 3],
    { name: "Jane", age: 30 },
    [4, 5, 6]
];

// 6. object with mix values
let mixedObject = {
    number: 1,
    greeting: "Hello",
    person1: { name: "John", age: 25 },
    array1: [1, 2, 3],
    person2: { name: "Jane", age: 30 },
    array2: [4, 5, 6]
};

let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}

ans.innerHTML += x;