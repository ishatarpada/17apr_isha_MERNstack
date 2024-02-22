const btn = document.querySelector("#btn");

const studentUsername = /^ST_[A-Za-z]+$/;
const studentPassword = /^STPWD@[A-Za-z0-9]{5,15}$/;
const facultyUsername = /^FC_[A-Za-z]+$/;
const facultyPassword = /^FCPWD@[A-Za-z0-9]{5,15}$/;
const principalUsername = /^PR_[A-Za-z]+$/;
const principalPassword = /^PRPWD@[A-Za-z0-9]{5,15}$/;

btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission
    const role = document.querySelector("#role");
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#pswd").value;

    const selectedRole = role.value;

    if (validateCredentials(selectedRole, username, password)) {
        Swal.fire({
            title: "Good job!",
            text: "Login Successfully!",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Oops!",
            text: "Invalid username or password.",
            icon: "error"
        });
    }
});

function validateCredentials(role, username, password) {
    switch (role) {
        case "Student":
            return studentUsername.test(username) && studentPassword.test(password);
        case "Faculty":
            return facultyUsername.test(username) && facultyPassword.test(password);
        case "Principal":
            return principalUsername.test(username) && principalPassword.test(password);
        default:
            return false;
    }
}