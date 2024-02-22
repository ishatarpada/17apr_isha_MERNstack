let ans = document.getElementById("demo");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let ans1 = document.getElementById("demo1");
let ans2 = document.getElementById("demo2");

let a = 24;

function add() {
    let b = 24;
    ans.innerHTML += a + b + "<br>";
}

add();

// Initiate counter
let counter = 5;

// Function to increment counter
function addCounter() {
    // counter = 0;
    counter += 1;
}

// Call addCounter() 3 times
addCounter();
addCounter();
addCounter();

ans.innerHTML += counter + "<br>";

function increment() {
    let count = 0;
    function plus() {
         count += 1; 
        }
    plus();
    return count;
}

ans.innerHTML += increment() + "<br>";

let i = 0;

btn.addEventListener("click", function() {
    i++;
    ans1.innerHTML = i;
});

const inc = (
    function(){
        let j = 0 ;
        return function(){
            j++ ;
            return j;
        }
    }
)();

btn1.addEventListener("click" , function(){
    ans2.innerHTML = inc();
})