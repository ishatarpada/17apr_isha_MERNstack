function showPrompt() {
    const userInput = prompt("Please enter your name:", "Isha Patel");
    if (userInput !== null) {
        alert("You entered: " + userInput);
    } else {
        alert("You canceled the prompt.");
    }
}