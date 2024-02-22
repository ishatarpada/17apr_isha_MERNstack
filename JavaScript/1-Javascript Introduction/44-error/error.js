let ans = document.getElementById("demo");

// range error
let num = 1;
try {
    num.toPrecision(500);
}
catch (err) {
    ans.innerHTML += " num is :- " + num + "<br>";
    ans.innerHTML += " num.toPrecision(500); &#10170; " +  err.name + "<br><br>";
}


// reference error
try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    ans.innerHTML +=  err.name + "<br><br>";
  }

// type error
  let str = 1;
try {
  str.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  ans.innerHTML += " str is :- " + str + "<br>";
  ans.innerHTML += " str.toUpperCase();   &#10170; " +  err.name + "<br><br>";
}


// url error
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    ans.innerHTML += ' decodeURI("%%%"); &#10170; ' +  err.name + "<br><br>";
  }