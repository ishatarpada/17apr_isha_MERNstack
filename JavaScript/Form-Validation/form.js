function validForm() {
    let name = document.getElementById("name").value;

    // var nameRegex = /^[A-Za-z\s]+$/;
    // var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (name == "" || name == " ") {
        alert("please enter your first name");
        return false;
    }

}