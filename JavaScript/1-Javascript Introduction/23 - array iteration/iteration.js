let ans = document.getElementById("demo");

const colors = [" red " , " black " , " white "  , " purple " , " yellow " , " green " , "blue" , " brown "]
const numbers = [ 40 ,  100 ,  1 ,  5 ,  25 ,  10]; 
ans.innerHTML = `<h3> Color array is &#10170;   ${colors} <br></h3>`;
ans.innerHTML += `<h3> Color array is &#10170;   ${numbers} <br><br></h3>`;

// 1. forEach() => callback Function for each element.
// function take the 3 argument value , index and array.
// The forEach() method does not change the original array.

colors.forEach(arrEle);

function arrEle(value , index , array){
    ans.innerHTML += value + "  ";
}

ans.innerHTML += "<br>"

numbers.forEach(arrElement);

function arrElement(value){
    ans.innerHTML += value*2  + "  ";
}

ans.innerHTML += "<br> number array is &#10170;" + numbers +"<br><br>"


// 2. map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.


const numberArr = numbers.map(arrElement);

function arrElement(value) {
    ans.innerHTML += value * 2 + "  ";
}

ans.innerHTML += "<br><br>";

// 3. flatMap() => method first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap((x) => x * 2);
ans.innerHTML += myArr + "<br>" + newArr + "<br><br>";

// 4. filter() => method create a new array with which elements that pass a test function.
ans.innerHTML += " number array is &#10170; " + numbers + "<br>";

function testFunction(value){
    return value > 20;
}

ans.innerHTML += " greater than 20 number elements array is &#10170; " + numbers.filter(testFunction) + "<br><br>";

// 5. reduce() => method runs a function on each array element to produce (reduce it to) a single value.
ans.innerHTML += " number array is &#10170; " + numbers + "<br>";

function sumArray(total , value){
    return total += value;
}

ans.innerHTML += " sum of all element is &#10170;" + numbers.reduce(sumArray) + "<br><br>"


// 6. reduceRight() =>  method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().
ans.innerHTML += " number array is &#10170; " + numbers + "<br>";

function sumArray(total , value){
    return total += value;
}

ans.innerHTML += " sum of all element is &#10170;" + numbers.reduceRight(sumArray) + "<br><br>"


// 7. every() =>  method checks if all array values pass a test then give true otherwise false.
ans.innerHTML += " number array is &#10170; " + numbers + "<br>";

function aboveElement(value){
    return value > 18;
}

ans.innerHTML += "  all element is above 18  &#10170;" + numbers.every(aboveElement) + "<br>"
ans.innerHTML += "  all elements are above 1  &#10170;" + numbers.every(function(value) { return value >= 1; }) + "<br><br>";


// 8. some() => method checks if some array values pass a test then give true otherwise false.
ans.innerHTML += "  some element is above 18  &#10170;" + numbers.some(aboveElement) + "<br><br>"

// 9. Array.from() => method returns an Array object from any object with a length property or any iterable object.
ans.innerHTML += "  new array is  &#10170;" + Array.from("ISHAPATEL") + "<br><br>"

// 10. Array.keys() => method returns an Array Iterator object with the keys of an array.
const keys = colors.keys();

for(let i of keys){
    ans.innerHTML += i + " ";
}
ans.innerHTML += "<br><br>";


// 11. array.entries() => returns an Array Iterator object with key/value pairs.
const pair = colors.entries();

for(let i of pair){
    ans.innerHTML += i + " <br> " ;
}
ans.innerHTML += "<br><br>";

// 12. array.with() =>  method as a safe way to update elements in an array without altering the original array.
const newColor = colors.with(5 , " Violate ");
ans.innerHTML += " New array is &#10170; " + newColor + "<br><br>";


// 13. spread(...) => ... operator expands an iterable (like an array) into more elements
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
ans.innerHTML += year;