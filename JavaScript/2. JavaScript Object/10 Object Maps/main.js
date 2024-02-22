let ans = document.getElementById("demo");

// map method :- Map()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 20]
]);

for(let i of fruits){
    ans.innerHTML += i + "  ";
}
ans.innerHTML += "<br>"
ans.innerHTML += " size of the fruits is &#10170 " + fruits.size;
ans.innerHTML += "<br><br>"

// set() => add the element in map.
fruits.set("kiwi" , 600);
fruits.set("litchi" , 200);
fruits.set("mango" , 200);

for(let i of fruits){
    ans.innerHTML += i + " <br> ";
}
ans.innerHTML += " size of the fruits is &#10170 " + fruits.size;
ans.innerHTML += "<br><br>"


// get() => get the value of key.
ans.innerHTML += "fruits.get('bananas') &#10170 "+ fruits.get("bananas") + "<br>";
ans.innerHTML += "fruits.get('apples') &#10170 "+ fruits.get("apples") + "<br>";
ans.innerHTML += "fruits.get('litchi') &#10170 "+ fruits.get("litchi") + "<br>";
ans.innerHTML += "fruits.get('mango') &#10170 "+ fruits.get("mango") + "<br><br>";

// delete() => delete the element.
ans.innerHTML += "fruits.delete('bananas') &#10170 "+  fruits.delete("bananas") + "<br>";
ans.innerHTML += "fruits.delete('mango') &#10170 "+  fruits.delete("mango") + "<br><br>";

// The has() Method
// The has() method returns true if a key exists in a Map:
ans.innerHTML += "fruits.has('bananas') &#10170 "+  fruits.has("bananas") + "<br>";
ans.innerHTML += "fruits.has('litchi') &#10170 "+  fruits.has("litchi") + "<br><br>";
ans.innerHTML += " size of the fruits is &#10170 " + fruits.size + "<br><br>";


// The forEach() Method
// The forEach() method calls a function for each key/value pair in a Map
fruits.forEach(fruitsInfo);

function fruitsInfo(value , key){
    ans.innerHTML += key + " = " + value + "<br>";
}
ans.innerHTML += "<br>"

// The entries() Method
// The entries() method returns an iterator object with the [key, values] in a Map
for(const i of fruits.entries()){
    ans.innerHTML += i + "<br>";
}