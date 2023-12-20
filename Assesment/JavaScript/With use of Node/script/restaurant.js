document.addEventListener("DOMContentLoaded", function () {
    // Get the form container
    const formContainer = document.getElementById('bookingForm');

    // create element 
    const heading = document.createElement("h1");
    heading.classList.add('heading')
    heading.innerText = "BOOK YOUR TABLE";

    // table-container
    const divTableContainer = document.createElement("div");
    divTableContainer.classList.add('table-container');

    // SECTION-1

    // table-img1 , table-content => table-details and table-book . table-details => food-1 => food-prise . table-book => book-now
    const divImg1 = document.createElement("div");
    divImg1.classList.add('table-img-1', 'table-content');

    const divDetails = document.createElement("div");
    divDetails.classList.add('table-details', 'table-details-1');

    const food_1 = document.createElement("h2");
    food_1.classList.add('food', 'food_1')
    food_1.innerText = "Noodles";
    food_1.style.color = "white";

    const foodPrise_1 = document.createElement("span");
    foodPrise_1.classList.add('foodPrise', 'foodPrise_1')
    foodPrise_1.innerText = "$60";
    foodPrise_1.style.color = "#72ab1e";

    const divBook = document.createElement("div");
    divBook.classList.add('table-book', 'table-book-1');

    const food_book = document.createElement("h3");
    food_book.classList.add('foodBook')
    food_book.innerText = "Book Now";

    // section-2
    const divForm = document.createElement("div");
    divForm.classList.add('table-form', 'table-content');

    const form = document.createElement("form");
    form.classList.add('form');

    const name_text = document.createElement('div');
    name_text.classList.add('name-text');
    const bookingChoiceLabel = document.createElement('label');
    bookingChoiceLabel.textContent = 'Choice of Booking:';
    bookingChoiceLabel.setAttribute('for', 'booking')
    const name_info = document.createElement("div");
    name_info.classList.add("name-info");
    const bookingChoiceSelect = document.createElement('select');
    bookingChoiceSelect.setAttribute('id', 'bookingType');
    bookingChoiceSelect.classList.add("input");
    const bookingOptions = [ 'Booking' , 'Full day booking', 'Half day booking', 'Hourly booking'];
    bookingOptions.forEach(option => {
        const choiceOption = document.createElement('option');
        choiceOption.textContent = option;
        bookingChoiceSelect.appendChild(choiceOption);
    });

    const name_text_1 = document.createElement('div');
    name_text_1.classList.add('name-text');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name :';
    const name_info_1 = document.createElement("div");
    name_info_1.classList.add("name-info");
    const userNameInput = document.createElement('input');
    userNameInput.classList.add('input');
    userNameInput.setAttribute('type', 'text');
    userNameInput.setAttribute('id', 'name');
    userNameInput.setAttribute('placeholder', 'Enter your name...');
    userNameInput.required = true;

    const name_text_2 = document.createElement('div');
    name_text_2.classList.add('name-text');
    const mailLabel = document.createElement('label');
    mailLabel.setAttribute('for', 'mail');
    mailLabel.textContent = 'Email :';
    const name_info_2 = document.createElement("div");
    name_info_2.classList.add("name-info");
    const emailInput = document.createElement('input');
    emailInput.classList.add('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'mail');
    emailInput.setAttribute('placeholder', 'E-mail');
    emailInput.required = true;

    const name_text_3 = document.createElement('div');
    name_text_3.classList.add('name-text');
    const phnLabel = document.createElement('label');
    phnLabel.setAttribute('for', 'no');
    phnLabel.textContent = 'Phone no :';
    const name_info_3 = document.createElement("div");
    name_info_3.classList.add("name-info");
    const phnInput = document.createElement('input');
    phnInput.classList.add('input');
    phnInput.setAttribute('type', 'tel');
    phnInput.setAttribute('id', 'phn');
    phnInput.setAttribute('placeholder', 'Phone no');
    phnInput.required = true;

    const name_text_4 = document.createElement('div');
    name_text_4.classList.add('name-text');
    const peopleLabel = document.createElement('label');
    peopleLabel.setAttribute('for', 'no');
    peopleLabel.textContent = 'No Of People :';
    const name_info_4 = document.createElement("div");
    name_info_4.classList.add("name-info");
    const numberOfPersonsInput = document.createElement('input');
    numberOfPersonsInput.setAttribute('type', 'number');
    numberOfPersonsInput.classList.add('input');
    numberOfPersonsInput.setAttribute('id', 'people');
    numberOfPersonsInput.setAttribute('placeholder', 'Enter the No of people');
    numberOfPersonsInput.required = true;

    const name_text_5 = document.createElement('div');
    name_text_5.classList.add('name-text');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'DATE :';
    const name_info_5 = document.createElement("div");
    name_info_5.classList.add("name-info");
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.classList.add('input');
    dateInput.required = true;

    const name_text_6 = document.createElement('div');
    name_text_6.classList.add('name-text');
    const timeLabel = document.createElement('label');
    timeLabel.setAttribute('for', 'time');
    timeLabel.textContent = 'Time :';
    const name_info_6 = document.createElement("div");
    name_info_6.classList.add("name-info");
    const timeInput = document.createElement('input');
    timeInput.setAttribute('type', 'time');
    timeInput.classList.add('input');
    timeInput.required = true;

    const name_text_7 = document.createElement('div');
    name_text_7.classList.add('name-text');
    const slotLabel = document.createElement('label');
    slotLabel.setAttribute('for', 'time');
    slotLabel.textContent = 'Slot :';
    const name_info_7 = document.createElement("div");
    name_info_7.classList.add("name-info");
    const slotSelect = document.createElement('select');
    slotSelect.setAttribute('type', 'time');
    slotSelect.classList.add('input');
    const slotOptions = ['Breakfast', 'Lunch', 'Dinner'];
    slotOptions.forEach(option => {
        const slotOption = document.createElement('option');
        slotOption.textContent = option;
        slotSelect.appendChild(slotOption);
    });

    const center = document.createElement("center");
    const button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.innerText = "Submit";
    button.setAttribute('onclick', 'validation()');


    // section-3
    const divImg2 = document.createElement("div");
    divImg2.classList.add('table-img-2', 'table-content');

    const divDetails_1 = document.createElement("div");
    divDetails_1.classList.add('table-details', 'table-details-2');

    const food_2 = document.createElement("h2");
    food_2.classList.add('food', 'food_1')
    food_2.innerText = "Cold Drinks";

    const foodPrise_2 = document.createElement("span");
    foodPrise_2.classList.add('foodPrise', 'foodPrise_2')
    foodPrise_2.innerText = "$50";
    foodPrise_2.style.color = "#72ab1e";

    const divBook_1 = document.createElement("div");
    divBook_1.classList.add('table-book', 'table-book-2');

    const food_book_1 = document.createElement("h3");
    food_book_1.classList.add('foodBook')
    food_book_1.innerText = "Book Now";
    food_book_1.style.color = "black";


    // Append the elements to the form container
    formContainer.appendChild(heading);
    formContainer.appendChild(divTableContainer);

    // section-1
    divTableContainer.appendChild(divImg1);
    divImg1.appendChild(divDetails);
    divDetails.appendChild(food_1);
    divDetails.appendChild(foodPrise_1);
    divImg1.appendChild(divBook);
    divBook.appendChild(food_book);

    // section-2
    divTableContainer.appendChild(divForm);
    divForm.appendChild(form);
    form.appendChild(name_text);
    name_text.appendChild(bookingChoiceLabel);
    name_text.appendChild(name_info);
    name_info.appendChild(bookingChoiceSelect);
    form.appendChild(name_text_1);
    name_text_1.appendChild(nameLabel);
    name_text_1.appendChild(name_info_1);
    name_info_1.appendChild(userNameInput);
    form.appendChild(name_text_2);
    name_text_2.appendChild(mailLabel);
    name_text_2.appendChild(name_info_2);
    name_info_2.appendChild(emailInput);
    form.appendChild(name_text_3);
    name_text_3.appendChild(phnLabel);
    name_text_3.appendChild(name_info_3);
    name_info_3.appendChild(phnInput);
    form.appendChild(name_text_4);
    name_text_4.appendChild(peopleLabel);
    name_text_4.appendChild(name_info_4);
    name_info_4.appendChild(numberOfPersonsInput);
    form.appendChild(name_text_5);
    name_text_5.appendChild(dateLabel);
    name_text_5.appendChild(name_info_5);
    name_info_5.appendChild(dateInput);
    form.appendChild(name_text_6);
    name_text_6.appendChild(timeLabel);
    name_text_6.appendChild(name_info_6);
    name_info_6.appendChild(timeInput);
    form.appendChild(name_text_7);
    name_text_7.appendChild(slotLabel);
    name_text_7.appendChild(name_info_7);
    name_info_7.appendChild(slotSelect);
    form.appendChild(center);
    center.appendChild(button);

    // section-3
    divTableContainer.appendChild(divImg2);
    divImg2.appendChild(divDetails_1);
    divDetails_1.appendChild(food_2);
    divDetails_1.appendChild(foodPrise_2);
    divImg2.appendChild(divBook_1);
    divBook_1.appendChild(food_book_1);


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


    // Event listener for choice of booking changes
    bookingChoiceSelect.addEventListener('change', function () {
        const selectedOption = bookingChoiceSelect.value;
    
        // Hide all elements
        let data = [name_text_5 , name_text_6, name_text_7];
        data.forEach(element => {
            element.style.display = 'none';
        });
    
        if (selectedOption === 'Full day booking') {
            name_text_5.style.display = 'block';
        } else if (selectedOption === 'Half day booking') {
            name_text_5.style.display = 'block';
            name_text_7.style.display = 'block';
        } else if (selectedOption === 'Hourly booking') {
            name_text_5.style.display = 'block';
            name_text_6.style.display = 'block';
        }
    });
});