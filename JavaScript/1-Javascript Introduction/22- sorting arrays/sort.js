let ans = document.getElementById("demo");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [40, 100, 1, 5, 25, 10];

ans.innerHTML = " Fruit array is &#10170; " + fruits + "<br>";
ans.innerHTML += " Number array is &#10170; " + numbers + "<br><br>";

//  Alphabetic Sorting :- 

// 1. array.sort() => return the sort the array in ascending order .
// this method change the original array.
ans.innerHTML += " sort the fruits array <br>";
ans.innerHTML += " fruits.sort() &#10170; " + fruits.sort() + "<br><br>";

// 2. array.reverse() => return the reverse the array .
// this method change the original array.
ans.innerHTML += " reverse the fruits array <br>";
ans.innerHTML += " fruits.reverse() &#10170; " + fruits.reverse() + "<br><br>";

// 3. array.toSorted() => return the sort the array in ascending order .
// this method don't change the original array.
ans.innerHTML += " sort the fruits array <br>";
ans.innerHTML += " Fruit array is &#10170; " + fruits + "<br>";
ans.innerHTML += " fruits.toSorted() &#10170; " + fruits.toSorted() + "<br><br>";


// 4. array.toReversed() => return the reverse the array in ascending order .
// this method don't change the original array.
ans.innerHTML += " reverse the fruits array <br>";
ans.innerHTML += " Fruit array is &#10170; " + fruits + "<br>";
ans.innerHTML += " fruits.toReversed() &#10170; " + fruits.toReversed() + "<br><br>";


// 5. Sorting Object Arrays  => if objects have properties of different data types, the sort() method can be used to sort the array.
// a compare function to compare the property values.
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

function compare_func(a, b) {
    return a.year - b.year;
}


function compare_function(a, b) {
    let  x = a.type.toLowerCase();
    let  y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}

function displayData() {
    return (
        cars[0].type + " " + cars[0].year + " , " +
        cars[1].type + " " + cars[1].year + " , " +
        cars[2].type + " " + cars[2].year
    );
}

ans.innerHTML += " car array is &#10170; " + displayData() + "<br><br>";
ans.innerHTML += " sort the car array by year value <br>";
cars.sort(compare_func);
ans.innerHTML += " cars.sort(compare_func) &#10170; " + displayData() + "<br>";
ans.innerHTML += " car array is &#10170; " + displayData() + "<br><br>";
ans.innerHTML += " sort the car array by type value <br>";
cars.sort(compare_function);
ans.innerHTML += " cars.sort(compare_func) &#10170; " + displayData() + "<br>";
ans.innerHTML += " car array is &#10170; " + displayData() + "<br><br>";


// Numeric Sort
ans.innerHTML += " Number array is &#10170; " + numbers + "<br><br>";


// sort() => return the sort the array in ascending order .
// this method change the original array.
function compare_number(a, b) {
    return a - b;
}
numbers.sort(compare_number);
ans.innerHTML += " Sort the Number array is &#10170; " + numbers + "<br>";

// reverse :- return the reverse the array .
numbers.reverse(compare_number);
ans.innerHTML += " Reverse the Number array is &#10170; " + numbers + "<br><br>";

// 3. array.toSorted() => return the sort the array in ascending order .
// this method don't change the original array.
ans.innerHTML += " Number array is &#10170; " + numbers + "<br>";
ans.innerHTML += " Sort the Number array is &#10170; " + numbers.toSorted(compare_number) + "<br>";

// 4. array.toReversed() => return the reverse the array in ascending order .
// this method don't change the original array.
ans.innerHTML += " Reverse the Number array is &#10170; " + numbers.toReversed(compare_number)+ "<br><br>";

// 5.sorting array in random order.
// in this method original array is changed.
ans.innerHTML += " Number array is &#10170; " + numbers + "<br>";
 
function compareMath(){
    return 0.5 - Math.random();
}

ans.innerHTML += " sort the array in random number &#10170; " + numbers.sort(compareMath) + "<br>";
ans.innerHTML += " Number array is &#10170; " + numbers + "<br><br>";


// Fisher Yates shuffle method.
// in this method original array is changed
ans.innerHTML += " Number array is &#10170; " + numbers + "<br>";

function myFunction() {
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = k;
    }
    ans.innerHTML += " Number array is &#10170; " +  numbers + "<br>";
}
for(let i = 0 ; i < 5 ; i++){
    myFunction();
}
ans.innerHTML += "<br>";


// find the min and max number in array
ans.innerHTML += " Number array is &#10170; " + numbers + "<br>";
numbers.sort(compare_number);
ans.innerHTML += " Sort the Number array is &#10170; " + numbers + "<br>";
ans.innerHTML += " min value is (numbers[0]) &#10170;  " + numbers[0] + "<br>"
ans.innerHTML += " max value is (numbers[numbers.length-1]) &#10170;  " + numbers[numbers.length-1] + "<br><br>"


// using Math.min() 
ans.innerHTML += " Number array is &#10170; " + numbers.sort(compareMath) + "<br>";

function minElement(arr){
    return Math.min.apply(null , arr);
}

function maxElement(arr){
    return Math.max.apply(null , arr);
}

ans.innerHTML += " min value is  &#10170;  " + minElement(numbers) + "<br>"
ans.innerHTML += " max value is  &#10170;  " + maxElement(numbers) + "<br><br>"


// sorting method 
ans.innerHTML += " Number array is &#10170; " + numbers.sort(compareMath) + "<br>";

function sortArr() {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    ans.innerHTML += " min value is  &#10170; " + numbers[0] + " <br> max value is  &#10170; " + numbers[numbers.length - 1] + "<br><br>";;
}

sortArr();

// 3rd method
ans.innerHTML += " Number array is &#10170; " + numbers.sort(compareMath) + "<br>";
function findMinMax(){
    let len = numbers.length;

    if (len === 0) {
        console.log("Array is empty");
        return;
    }

    let min = numbers[0]; 
    let max = numbers[0]; 

    for (let i = 1; i < len; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    ans.innerHTML += " min value is  &#10170; " + min + " <br> ";
    ans.innerHTML += " max value is  &#10170; " + max + " <br> ";
}

findMinMax();