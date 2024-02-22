const ans = document.getElementById("demo");

// Everything With a "Value" is True
ans.innerHTML = " Boolean(10 > 9) &#10170 " + Boolean(10 > 9) + "<br>"
ans.innerHTML += " (10 > 9 ) &#10170 " + (10 > 9) + "<br>";
ans.innerHTML += " 10 > 9  &#10170 " + 10 > 9 ;
ans.innerHTML += "<br> Boolean(100) &#10170 " + Boolean(100) 
+ "<br>"
ans.innerHTML += "<br> Boolean(3.14) &#10170 " + Boolean(3.14) 
+ "<br>"
ans.innerHTML += "<br> Boolean(-15) &#10170 " + Boolean(-15) 
+ "<br>"
ans.innerHTML += "<br> Boolean('Hello') &#10170 " + Boolean("Hello") 
+ "<br>"
ans.innerHTML += "<br> Boolean('False') &#10170 " + Boolean('False') 
+ "<br>"
ans.innerHTML += "<br> Boolean(7 + 1 + 3.14) &#10170 " + Boolean(7 + 1 + 3.14) + "<br>"

// Everything Without a "Value" is False
ans.innerHTML += " Boolean(0) &#10170 " + Boolean(0) + "<br>";
ans.innerHTML += " Boolean(-0) &#10170 " + Boolean(-0) + "<br>";
ans.innerHTML += " Boolean('') &#10170 " + Boolean('') + "<br>";
ans.innerHTML += " Boolean(null) &#10170 " + Boolean(null) + "<br>";
ans.innerHTML += " Boolean(false) &#10170 " + Boolean(false) + "<br>";
ans.innerHTML += " Boolean(10 / 'hello' ) &#10170 " + Boolean(10 / 'hello' ) + "<br>";
ans.innerHTML += " Boolean(' ') &#10170 " + Boolean(' ') + "<br><br>";

// Boolean as Objects
let boolean = false;
let boolObj = new Boolean(false);
let bool_obj = new Boolean(false);

ans.innerHTML += " typeof(boolean) &#10170 " + typeof(boolean) + "<br>";
ans.innerHTML += " typeof(boolObj) &#10170 " + typeof(boolObj) + "<br><br>";

ans.innerHTML += " (boolean == boolObj) &#10170 " + (boolean == boolObj) + "<br>";
ans.innerHTML += " (boolean === boolObj) &#10170 " + (boolean === boolObj) + "<br>";
ans.innerHTML += " (bool_obj === boolObj) &#10170 " + (bool_obj === boolObj) + "<br>";