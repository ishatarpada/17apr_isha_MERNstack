const btn = document.querySelector("#btn");

const studentUsername = "student123";
const studentPassword = "studentPassword";
const facultyUsername = "faculty456";
const facultyPassword = "facultyPassword";
const principalUsername = "principal789";
const principalPassword = "principalPassword";

btn.addEventListener("click", function () {
    const chose = document.querySelector("#chose");
    const userName = document.querySelector("#username").value;
    const pass = document.querySelector("#pswd").value;

    // console.log(chose);
    const userSelection = chose.value;
    // console.log(userSelection);

    if (validateCredentials(userSelection, userName, pass)) {
        Swal.fire({
            title: "Good job!",
            text: "Login SuccessFully!",
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

function validateCredentials(selection, username, password) {
    console.log(selection, username, password);

    switch (selection) {
        case "Student":
            return username === studentUsername && password === studentPassword;
        case "Faculty":
            return username === facultyUsername && password === facultyPassword;
        case "Principal":
            return username === principalUsername && password === principalPassword;
        default:
            return false;
    }
}