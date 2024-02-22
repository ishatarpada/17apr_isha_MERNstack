let ans = document.getElementById("demo")

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = " ";
list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

ans.innerHTML = text;