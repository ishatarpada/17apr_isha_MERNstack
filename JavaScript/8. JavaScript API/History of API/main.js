const ans = document.getElementById("demo");
const btn = document.getElementById("btn");

btn.addEventListener("click" , function(){
    window.history.back();
    window.history.go(-3);
    window.history.forward();
    window.history.length;
});