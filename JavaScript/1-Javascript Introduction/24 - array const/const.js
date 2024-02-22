let ans = document.getElementById("demo");

const colors = [" red " , " black " , " white "  , " purple " , " yellow " , " green " , "blue" , " brown "]
const numbers = [ 40 ,  100 ,  1 ,  5 ,  25 ,  10]; 
ans.innerHTML += " array is &#10170;" + colors + "<br>"
ans.innerHTML += " array is &#10170;" + numbers + "<br><br>"


// reassigned the elements 
colors[3] = " Violate ";
ans.innerHTML += " array is &#10170;" + colors + "<br>"
