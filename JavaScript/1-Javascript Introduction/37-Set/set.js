let ans = document.getElementById("demo");

const letters = new Set(["a", "b", "c", "d"]);

// add the value using add()method.
letters.add("e");
letters.add("f");
letters.add("g");
letters.add("h");

for (let i of letters) {
    ans.innerHTML += i + "  ";
}
ans.innerHTML += "<br><br>";

// delete the value using delete()method.
letters.delete("f");

// If you add equal elements, only the first will be saved:
letters.add("e");
letters.add("e");
letters.add("e");
letters.add("e");

for (let i of letters) {
    ans.innerHTML += i + "  ";
}
ans.innerHTML += "<br><br>";

// has() => true if value is exists.
ans.innerHTML += letters.has("f") + " <br>";
ans.innerHTML += letters.has("e") + " <br><br>";

// The forEach() Method
// The forEach() method invokes (calls) a function for each Set element:
letters.forEach(printLetter);

function printLetter(value, index, array) {
    ans.innerHTML += index + "  ";

}
ans.innerHTML += "<br><br>";

// The values() Method
// The values() method returns a new iterator object containing all the values in a Set:

for (let i of letters.values()) {
    ans.innerHTML += i + "  ";
}