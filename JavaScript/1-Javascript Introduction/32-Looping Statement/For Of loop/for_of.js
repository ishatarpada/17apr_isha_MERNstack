const ans = document.getElementById("demo");

const person = "Isha Patel"
ans.innerHTML = " Person Name is &#10170 " + person +   "<br><br>"

const fruits = [" apple ", " mango ", " cherry ", " strawberry "];
ans.innerHTML += "Fruits is  &#10140;  " + fruits + "<br><br>";

const numbers = [45, 4, 9, 16, 25];
ans.innerHTML += "numbers is  &#10140;  " + numbers + "<br><br>";

// print info using for-in loop
ans.innerHTML += " Person Name  is &#10170";
for(let i of person){
    ans.innerHTML += i + "  ";
}
ans.innerHTML += "<br><br>";

// print fruits using for-in loop
ans.innerHTML += " Fruits is &#10170";
for(let i of fruits){
    ans.innerHTML += i + "  ";
}
ans.innerHTML += "<br><br>";

// print numbers using for-in loop
ans.innerHTML += " numbers is &#10170";
for(let i of numbers){
    ans.innerHTML += i + "  ";
}
ans.innerHTML += "<br><br>";