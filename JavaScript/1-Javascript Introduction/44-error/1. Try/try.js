let ans = document.getElementById("demo");

try{
    addalert("welcome to my page");
}
catch(err){
    ans.innerHTML += err.message;
}