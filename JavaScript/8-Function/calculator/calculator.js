function number(result) {
    document.getElementById("display").value += result;
}
function ac() {
    document.getElementById("display").value = "";
}
function del() {
    var x = document.getElementById("display").value;
    document.getElementById("display").value = x.slice(0, x.length - 1);
}

function output() {
    var result = document.getElementById("display").value;
    document.getElementById("display").value = eval(result);
} 