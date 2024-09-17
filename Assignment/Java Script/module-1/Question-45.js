// Write a JavaScript program to compare two objects?

let obj1 = { name: "isha", "course": "MERN" };
let obj2 = { name: "isha", "course": "MERN" };
let obj3 = { name: "disha", "course": "MERN" };

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);
// console.log(obj1 == obj3);
// console.log(obj1 === obj3);

// create function for compare the object

function compareObject(obj1 , obj2) {
  let keysA = Object.keys(obj1);
    let keysB = Object.keys(obj2);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(compareObject(obj1, obj2));
console.log(compareObject(obj1, obj3));
console.log(compareObject(obj2, obj3));