const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

function checkNum() {
    let num = parseInt(inp.value);
    let sum = 0;

    while (num != 0) {
        let reminder = num % 10;
        sum += reminder * reminder * reminder;
        num = Math.floor(num / 10);
    }
    return sum;
}

btn.addEventListener("click", function () {
    let num = parseInt(inp.value);

    if (checkNum() == num) {
        Swal.fire({
            title: "Good job!",
            text: "Number is Armstrong Number!",
            icon: "success"
        });
    }
    else {
        Swal.fire({
            title: "Oops!",
            text: "Number is not Armstrong Number.",
            icon: "error"
        });
    }
});