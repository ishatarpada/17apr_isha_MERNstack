const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
console.log(obj.name, obj.age);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr[0], myArr[1], myArr[2], myArr[3])

const text1 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const dateObj = JSON.parse(text1);
obj.birth = new Date(obj.birth);
console.log(dateObj.name, dateObj.birth);

const text2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const birthObj = JSON.parse(text2, function (key, value) {
    if (key == "birth") {
        console.log(new Date(value));
    } else {
        console.log(value);
    }
});

const text3 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj1 = JSON.parse(text3);
obj1.age = eval("(" + obj1.age + ")");
console.log(obj1.name, obj1.age());


// JSON.stringfy()
const obj2 = { name: "John", age: 30, city: "New York" };
console.log(typeof (obj2));
const myJson = JSON.stringify(obj2);
console.log(myJson);
console.log(typeof (myJson));

console.log(typeof (obj2));
const myArray = JSON.stringify(obj2);
console.log(myArray);
console.log(typeof (myArray));

const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
const obj4 = { name: "John", age: 31, city: "New York" };
let text4 = localStorage.getItem("testJSON");
let obj3 = JSON.parse(text4);
console.log("Object", obj3.name)

const ans = document.getElementById("demo")

// object Literals 
ans.innerHTML += "&#10022; object Literals " + "<br>"
const obj5 = '{"name":"Isha", "age":21, "car":null}'
ans.innerHTML += "Object is  &#10170; " + obj5 + "<br>";

const text5 = JSON.parse(obj5);
for (const x in text5) {
    ans.innerHTML += "  &#10170; " +  x + " , " +text5[x] + "<br>";
}
ans.innerHTML += "<br>";

// array literals
ans.innerHTML += "&#10022; Array Literals " + "<br>"
const arr = '["Ford", "BMW", "Fiat"]';
ans.innerHTML += "array is  &#10170; " + arr + "<br>";
const text6 = JSON.parse(arr);
ans.innerHTML += " &#10170; "  + text6[0] + "<br>";
ans.innerHTML += " &#10170; "  + text6[1] + "<br>";
ans.innerHTML += " &#10170; "  + text6[2] + "<br>";

// Accessing array values 
// for (let i = 0; i < arr.length; i++) {
//     ans.innerHTML += " &#10170; "  + text6[i];
// }
ans.innerHTML += "<br>";


// Array in object
const arrObj = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const text7 = JSON.parse(arrObj);
ans.innerHTML += "array Object is  &#10170; " + arrObj + "<br>";

// Accessing array values 
let emptyStr = "";
for (let i = 0; i < text7.cars.length; i++) {
    emptyStr += text7.cars[i] + ", ";
}
ans.innerHTML += emptyStr;
ans.innerHTML += "<br>";

