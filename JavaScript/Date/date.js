function calculateDateDifference() {
    const userDateInput = document.getElementById('userDate').value;
    const userDate = new Date(userDateInput);
    const currDateInput = document.getElementById('currDate').value;
    const currDate = new Date(currDateInput);

    if (isNaN(userDate)) {
        alert('hello user ! Please enter a the date.');
        return;
    }

    if (isNaN(currDate)) {
        alert('Please enter a current date.');
        return;
    }

    const timeDifference = userDate.getTime() - currDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `The difference between the current date and ${userDateInput} is ${daysDifference} days.`;
}
