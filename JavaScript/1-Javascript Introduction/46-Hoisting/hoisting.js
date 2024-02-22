let ans = document.getElementById("demo");

try {
    age = 21;
    var age;
} catch (error) {
    ans.innerHTML += error.message;
}

try {
    fName = "isha";
    let fName;
    ans.innerHTML += fName + "<br>";
} catch (error) {
    ans.innerHTML += error.message;
}

// try {
//     lName = "Patel";
//     const lName;
// } catch (error) {
//     ans.innerHTML += error.message;
// }
