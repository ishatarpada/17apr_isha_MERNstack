const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

function checkNum() {
    let num = parseInt(inp.value);
    let reversed = 0;
    let originalNum = num;
    while (num != 0) {
        let reminder = num % 10;
        reversed = reversed * 10 + reminder;
        num = Math.floor(num / 10);
    }
    console.log(reversed);
    return reversed === originalNum;
}

    btn.addEventListener("click", function () {
        let num = parseInt(inp.value);

        if (checkNum()) {
            Swal.fire({
                title: "Good job!",
                text: "Number is Palindrome Number!",
                icon: "success"
            });
        }
        else {
            Swal.fire({
                title: "Oops!",
                text: "Number is not Palindrome Number.",
                icon: "error"
            });
        }
    });