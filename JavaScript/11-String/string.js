let btn = document.getElementById("btn");
let btn_1 = document.getElementById("btn_1");
let result = document.getElementById("result");
let result1 = document.getElementById("result1");

btn.addEventListener("click", function () {
    let str = prompt("enter the string");
    result.innerHTML = str;
});

btn_1.addEventListener("click", function () {
    let str = prompt("enter the string");
    let length = str.length
    result1.innerHTML = length;
});

btn_2.addEventListener("click", function () {
    let str = prompt("enter the string");
    let n = prompt("enter the 1st index of slice")
    let m = prompt("enter the 2nd index of slice")
    let slice = str.slice(n , m);
    result2.innerHTML = slice;
});

btn_3.addEventListener("click", function () {
    let str = prompt("enter the string");
    let n = prompt("enter the index of number")
    let character = str.at(n)
    result3.innerHTML = character;
});

btn_4.addEventListener("click", function () {
    let str = prompt("enter the string");
    let n = prompt("enter the index of number")
    let character = str.charAt(n)
    result3.innerHTML = character;
});

btn_5.addEventListener("click", function () {
    let str = prompt("enter the string");
    let n = prompt("enter the index of number")
    let character = str.charCodeAt(n)
    result3.innerHTML = character;
});

btn_6.addEventListener("click", function () {
    let str = prompt("enter the string");
    let upper = str.toUpperCase();
    result4.innerHTML = upper;
});

btn_7.addEventListener("click", function () {
    let str = prompt("enter the string");
    let lower = str.toLowerCase()
    result4.innerHTML = lower;
});

btn_8.addEventListener("click", function () {
    let str = prompt("enter the string");
    let word_1 = prompt("enter the 1st word");
    let word_2 = prompt("enter the 2nd word");
    let replace = str.replace(word_1 , word_2)
    result5.innerHTML = replace;
});

btn_9.addEventListener("click", function () {
    let str = prompt("enter the string");
    let word_1 = prompt("enter the 1st word");
    let word_2 = prompt("enter the 2nd word");
    let replace = str.replaceAll(word_1 , word_2)
    result5.innerHTML = replace;
});

btn_10.addEventListener("click", function () {
    let str = prompt("enter the string");
    let n = prompt("enter the 1st index of slice")
    let m = prompt("enter the 2nd index of slice")
    let substring = str.substring(n , m);
    result6.innerHTML = substring;
});

btn_11.addEventListener("click", function () {
    let str = prompt("enter the string");
    let n = prompt("enter the 1st index of slice")
    let m = prompt("enter the 2nd index of slice")
    let substr = str.substr(n , m);
    result6.innerHTML = substr;
});

btn_12.addEventListener("click", function () {
    let str = prompt("enter the 1st string");
    let str1 = prompt("enter the 2nd string");
    let string = str.concat(str , str1)
    result7.innerHTML = string;
});

btn_13.addEventListener("click", function () {
    let str = prompt("enter the 1st string");
    let string = str.trim();
    result8.innerHTML = string;
});

btn_14.addEventListener("click", function () {
    let str = prompt("enter the 1st string");
    let string = str.trimStart();
    result8.innerHTML = string;
});

btn_15.addEventListener("click", function () {
    let str = prompt("enter the 1st string");
    let string = str.trimEnd();
    result8.innerHTML = string;
});