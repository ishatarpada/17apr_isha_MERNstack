let sub1 = document.getElementById("sub1");
let sub2 = document.getElementById("sub2");
let sub3 = document.getElementById("sub3");
let sub4 = document.getElementById("sub4");
let sub5 = document.getElementById("sub5");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let sum = parseInt(sub1.value) + parseInt(sub2.value) + parseInt(sub3.value) + parseInt(sub4.value) + parseInt(sub5.value);
    
    btn.innerHTML += " " + sum;
});