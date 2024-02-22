let ans = document.getElementById("demo");

let x = 0;
ans.innerHTML = " Boolean( x == 10 ) &#10170; " + Boolean(x == 10) + "<br>";
ans.innerHTML += " Boolean( x = 10 ) &#10170; " + Boolean(x = 10) + "<br>";

let a = 10;
let b = "10";
ans.innerHTML += ' ( 10 == "10") &#10170;  ' + (10 == "10") + "<br>";
ans.innerHTML += ' ( 10 === "10") &#10170;  ' + (10 === "10") + "<br>";

let c = 10;
switch (c) {
    case "10":
        alert("Hello");
        break;

    case 10:
        alert("Hello");
        break;

}

let num1 = 5;
let num2 = 2;
let num3 = "2";

ans.innerHTML += " 5 + 2 &#10170; " + (5 + 2) + "<br>";
ans.innerHTML += ' 5 + "2" &#10170;  ' + (5 + "2") + "<br>";

const str1 = "isha patel";
ans.innerHTML += " str1 is &#10170; " + str1 + "<br>";


// try {
//     const str2 = "isha
//     patel ";

// } catch (err) {
//     ans.innerHTML += err.message;
// }
// ans.innerHTML += " str2 is &#10170; " + str2 + "<br>";

ans.innerHTML += ' (typeof myObj === "undefined")  &#10170; ' + (typeof myObj === "undefined") + "<br>";
ans.innerHTML += ' (typeof myObj === "null")  &#10170; ' + (typeof myObj === "null") + "<br>";