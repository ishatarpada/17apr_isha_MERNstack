var a = document.getElementById("var_1");
var b = document.getElementById("var_2");
var ans = document.getElementById("ans");

function addition() {
    ans.innerHTML = parseInt(a.value) + parseInt(b.value);
}

function substraction() {
    document.write(parseInt(a.value) - parseInt(b.value));
}

function multiplication() {
    console.log(parseInt(a.value) * parseInt(b.value));
}

function division() {
    window.alert(parseInt(a.value) / parseInt(b.value));
}

