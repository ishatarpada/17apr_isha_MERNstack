let btn = document.getElementById("btn");
let span = document.getElementById("span");
btn.addEventListener("click" , function () {

    let fnm = document.querySelector("#fnm");
    let mail = document.querySelector("#mail");
    let phn = document.querySelector("#phn");
    let pswd = document.querySelector("#pswd");
    let confirmPswd = document.querySelector("#confirmPswd");

    const namePtn = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
    const phnPtn = /^[0-9]{10}$/;
    const pswdPtn = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

    if (fnm.value == "" && fnm.value == " ") {
        alert("Please enter your name");
        return false;
    }
    else if (!namePtn.test(fnm.value)) {
        alert("Please enter only letters for your name");
        return false;
    }

    if (mail.value == "" || mail.value == " ") {
        alert("Please enter your email address");
        return false;
    }

    if (phn.value == "" && phn.value == " ") {
        alert("Please enter your Phone Number");
        return false;
    }
    else if (!phnPtn.test(phn.value)) {
        alert("Please enter only 10 digits");
        return false;
    }

    if (pswd.value == "" && pswd.value == " ") {
        alert("Please enter password in given formet");
        return false;
    }
    else if (!pswdPtn.test(pswd.value)) {
        alert("Please enter password in given formet");
        return false;
    }

    if (pswd !== confirmPswd) {
        span.innerHTML = "please re-enter the password";
        return false;
    }

    return true;
});