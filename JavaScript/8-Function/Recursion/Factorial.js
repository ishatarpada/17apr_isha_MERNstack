
function factorial() {
    let n = parseInt(document.getElementById("no").value);
    let fact = document.getElementById("ans");
    if (isNaN(n)) {
        fact.innerHTML = "Please enter a valid number";
    } else {
        function recursion(n) {
            if (n <= 1) {
                return 1;
            } else {
                return n * recursion(n - 1);
            }
        }
        fact.innerHTML = `Factorial of ${n} is: ${recursion(n)}`;
    }
}