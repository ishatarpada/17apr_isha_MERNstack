function showAlert() {
    alert("hello , Good Morning");
}

function showConfirmation(){
    const result = confirm("Do you want to continue?");
    if (result === true) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
}

function showPrompt() {
    const userInput = prompt("Please enter your name:", "Isha Patel");
    if (userInput !== null) {
        alert("You entered: " + userInput);
    } else {
        alert("You canceled the prompt.");
    }
}