function validateForm() {
    let name = document.forms["myForm"]["user"].value;
    if (name == "") {
        Swal.fire({
            title: "Oops!",
            text: "Name must be filled out",
            icon: "error"
        });
        return false;
    }

    let phn = document.forms["myForm"]["phn"].value;

    if (phn === "" || isNaN(phn)) {
        Swal.fire({
            title: "Oops!",
            text: "Number must be filled out and must be a valid number",
            icon: "error"
        });
        return false;
    }
    
    phn = parseFloat(phn);
    
    if (phn < 0 || phn > 1000000000) {
        Swal.fire({
            title: "Oops!",
            text: "Number must be between 0 and 1,000,000,000",
            icon: "error"
        });
        return false;
    }
    

    let password = document.forms["myForm"]["password"].value;
    let passwordPtn = /^[A-Za-z0-9]{5,8}$/;

    if (password == "") {
        Swal.fire({
            title: "Oops!",
            text: "password must be filled out",
            icon: "error"
        });
        return false;
    }
    if(!passwordPtn.test(password)){
        Swal.fire({
            title: "Oops!",
            text: "Please , write the password in given format",
            icon: "error"
        });
        return false;
    }

    let mail = document.forms["myForm"]["user"].value;
    if (mail == "") {
        Swal.fire({
            title: "Oops!",
            text: "mail must be filled out",
            icon: "error"
        });
        return false;
    }

    if(name != "" && password != "" && password == passwordPtn && mail != ""){
        Swal.fire({
            title: "Hello!",
            text: "Details are correct",
            icon: "success"
        });
        return true;
    }


}