const ans = document.getElementById("demo");
const button = document.querySelector("button");
const btn = document.querySelector("#btn");

ans.innerHTML = "Math.random() &#10170; " + Math.random() + "<br><br>";
ans.innerHTML += " Math.floor(Math.random() * 10 )  &#10170; " + Math.floor(Math.random() * 10) + "<br>";
ans.innerHTML += " Math.floor(Math.random() * 100 )  &#10170; " + Math.floor(Math.random() * 100) + "<br>";
ans.innerHTML += " Math.floor(Math.random() * 1000 )  &#10170; " + Math.floor(Math.random() * 1000) + "<br>";
ans.innerHTML += " (Math.floor(Math.random() * 100 ) + 1)  &#10170; " + (Math.floor(Math.random() * 100) + 1) + "<br><br>";

button.addEventListener("click", function () {
    const min = 1;
    const max = 100;
    ans.innerHTML += " (Math.floor(Math.random() * (max - min + 1) ) + min) &#10170; " + (Math.floor(Math.random() * (max - min + 1)) + min) + "<br>";
});

btn.addEventListener("click", function () {
    const min = 1;
    const max = 100;
    ans.innerHTML += " (Math.floor(Math.random() * (min , max) ) + min) &#10170; " + (Math.floor(Math.random() * (min, max)) + min) + "<br>";
});