const ans = document.getElementById("demo");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const inputObj = document.getElementById("id1");
const submit = document.getElementById("submit");

// checkValidity() => true if  input element contains valid data.
// setCustomValidity() => Sets the validationMessage property of an input element.
btn.addEventListener("click", function checkDate() {

  if (!inputObj.checkValidity()) {
    ans.innerHTML += inputObj.validationMessage + "<br>";
  }
  else {
    ans.innerHTML += "number is in the given range <br>"
  }
});

btn1.addEventListener("click", function () {
  let txt = "Value is OK <br>";
  if (inputObj.validity.rangeOverflow) {
    txt = "Value is too large <br>";
  }
  if (inputObj.validity.rangeUnderflow) {
    txt = "Value is too small <br>";
  }
  ans.innerHTML += txt; // Update the message displayed in ans
});


submit.addEventListener("click", function (event) {

  const usernameField = document.getElementById('username');
  const ageField = document.getElementById('age');
  const emailField = document.getElementById('email');

  if (usernameField.validity.patternMismatch) {
    alert('Username must contain only letters and numbers.');
  }
  if (ageField.validity.rangeOverflow || ageField.validity.rangeUnderflow) {
    alert('Age must be between 18 and 100.');
  }
  if (emailField.validity.typeMismatch) {
    alert('Please enter a valid email address.');
  }
  if (usernameField.validity.valueMissing || ageField.validity.valueMissing || emailField.validity.valueMissing) {
    alert('All fields are required.');
  }
});
