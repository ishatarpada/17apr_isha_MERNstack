let buttons = document.querySelectorAll('button');
let ans = document.getElementById('display');
let result = ''; // Initialize result variable

for (let i of buttons) {
    i.addEventListener('click', function (e) {
        const buttonText = e.target.innerText;

        if (buttonText === '=') {
            try {
                result = eval(result);
                ans.value = result;
            } catch (error) {
                ans.value = 'Error';
            }
        } else if (buttonText === 'X') {
            result += '*';
            ans.value = result;
        } else if (buttonText === 'C') {
            result = ''; // Clear the result
            ans.value = result;
        } else if (buttonText === 'Del') {
            result = result.slice(0, -1);
            ans.value = result;
        } else {
            result += buttonText;
            ans.value = result;
        }
    });
}