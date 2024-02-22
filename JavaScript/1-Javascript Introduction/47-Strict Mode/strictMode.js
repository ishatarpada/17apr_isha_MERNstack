let ans = document.getElementById("demo");


try{
    "use strict";
    x = 25 ;
    ans.innerHTML += x ;
}
catch(error){
    ans.innerHTML += error.message;
}