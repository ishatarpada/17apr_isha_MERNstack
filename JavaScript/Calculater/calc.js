let buttons = document.querySelectorAll('button');
let ans = document.getElementById('display');
let result = '';

for (i of buttons) {
    i.addEventListener('click', function (e) {
        const buttonText = e.target.innerText;

        if (buttonText === '=') {
            try {
                result = eval(result);
                ans.value = result; // Use value to set the input field's value
            } catch (error) {
                ans.value = 'Error';
            }
        } else if (buttonText === 'X') {
            result += '*';
            ans.value = result;
        } else if (buttonText === 'AC') {
            result = '';
            ans.value = '';
        } else if (buttonText === 'Del') { // Use 'Del' instead of 'del'
            result = result.slice(0, -1);
            ans.value = result;
        } else {
            result += buttonText;
            ans.value = result;
        }
    });
}