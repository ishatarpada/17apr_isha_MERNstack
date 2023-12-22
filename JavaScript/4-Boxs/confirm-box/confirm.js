function showConfirmation(){
    const result = confirm("Do you want to continue?");
    if (result === true) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
}