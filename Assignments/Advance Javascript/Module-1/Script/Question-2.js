// Function to handle button clicks and update answers
function handleButtonClick(btn, ans, expression) {
  btn.addEventListener("click", function () {
    ans.innerHTML = expression;
  });
}

// Array of button and answer IDs
const btnIds = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7"];
const ansIds = ["ans1", "ans2", "ans3", "ans4", "ans5", "ans6", "ans7"];

// Loop through the button and answer IDs to add event listeners
for (let i = 0; i < btnIds.length; i++) {
  const btn = document.getElementById(btnIds[i]);
  const ans = document.getElementById(ansIds[i]);

  // Determine the expression based on the button ID
  let expression;
  switch (btnIds[i]) {
    case "btn1":
      expression = 5 > 4;
      break;
    case "btn2":
      expression = "apple" > "pineapple";
      break;
    case "btn3":
      expression = "2" > "12";
      break;
    case "btn4":
      expression = undefined == null;
      break;
    case "btn5":
      expression = undefined === null;
      break;
    case "btn6":
      expression = null == "\n0\n";
      break;
    case "btn7":
      expression = null === +"\n0\n";
      break;
    default:
      expression = "";
      break;
  }

  // Add event listener for each button
  handleButtonClick(btn, ans, expression);
}
