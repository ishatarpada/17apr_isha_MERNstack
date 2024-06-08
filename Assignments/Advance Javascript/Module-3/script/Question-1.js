// Get the password input and the show password checkbox
let password = document.getElementById("password");
let showPassword = document.getElementById("showPassword");

// Add event listener to show password checkbox
showPassword.addEventListener("change", togglePasswordVisibility);

function togglePasswordVisibility() {
    // Check if the checkbox is checked
    if (showPassword.checked) {
        // Change the input type to text and update button text
        password.type = 'text';
    } else {
        // Change the input type back to password
        password.type = 'password';
    }
}
