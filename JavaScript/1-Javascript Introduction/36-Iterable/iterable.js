let ans = document.getElementById("demo");

const str = "JavaScript";
const array = [" red ", " black ", " orange ", " white ", " purple ", " wine "];
const set = new Set([" a ", " b ", " c ", " d ", " e "]);
const map = new Map([
    [" apples  ", 500],
    [" bananas  ", 300],
    [" oranges  ", 200]
])

ans.innerHTML = " String is &#10170"
for (let i of str) {
    ans.innerHTML += i + "  ";
}
ans.innerHTML += " <br> <br> ";


ans.innerHTML += " Array is &#10170"
for (let i of array) {
    ans.innerHTML += i + "  ";
}
ans.innerHTML += " <br> <br> ";


ans.innerHTML += " set is &#10170"
for (let i of set) {
    ans.innerHTML += i + "  ";
}
ans.innerHTML += " <br> <br> ";

ans.innerHTML += " map is &#10170"
for (let i of map) {
    ans.innerHTML += i + "  ";
}
ans.innerHTML += " <br> <br> ";