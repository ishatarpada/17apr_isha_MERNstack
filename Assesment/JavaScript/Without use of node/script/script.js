function validation() {

    var name = document.getElementById("name").value;
    var nameRegex = /^[A-Za-z\s]+$/;

    if (name == "" || name == " ") {
        alert("Please enter your name");
        return false;
    }
    else if (!name.match(nameRegex)) {
        alert("Please enter only letters for your name");
        return false;
    }

    var mail = document.getElementById("mail").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (mail == "" || mail == " ") {
        alert("Please enter your email address");
        return false;
    }
    else if (!mail.match(emailRegex)) {
        alert("Please enter a valid email address");
        return false;
    }

    var phn = document.getElementById("phn").value;
    var phnRegex = /^\d{10}$/;

    if (phn == "" || phn == " ") {
        alert("Please enter your mobile number");
        return false;
    }
    else if (!phn.match(phnRegex)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    return true;
}

function showOptions() {
    var bookingType = document.getElementById('bookingType').value;
    var dateSection = document.getElementById('dateSection');
    var timeSection = document.getElementById('timeSection');
    var slotSection = document.getElementById('slotSection');

    dateSection.style.display = 'none';
    timeSection.style.display = 'none';
    slotSection.style.display = 'none';


    if (bookingType === 'Full Day Booking') {
        dateSection.style.display = 'block';
    } else if (bookingType === 'Half Day Booking') {
        dateSection.style.display = 'block';
        slotSection.style.display = 'block';
    } else if (bookingType === 'Hour Day Booking') {
        dateSection.style.display = 'block';
        timeSection.style.display = 'block';
    }
}
