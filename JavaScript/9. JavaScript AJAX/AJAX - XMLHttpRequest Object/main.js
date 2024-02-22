const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const ans = document.getElementById("demo");

btn.addEventListener("click", function () {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('GET', 'text.html', true);

    // Set a request header
    xhr.setRequestHeader('Content-Type', 'application/json');

    /*
     cancels the current request.
     xhr.abort()
    */

    // Define a function to handle the response
    // Define a callback function
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Request was successful, handle the response
            ans.innerHTML = xhr.responseText;
            Swal.fire({
                title: "Good job!",
                text: "File SuccessFully display!",
                icon: "success"
            });
        } else {
            // Request failed
            ans.innerHTML = 'Request failed with status:', xhr.status;
            Swal.fire({
                title: "Oops!",
                text: "Please check your file name.",
                icon: "error"
            });
        }
    };

    // Define a function to handle errors
    xhr.onerror = function () {
        ans.innerHTML = 'Request failed';
    };

    // Send the request
    xhr.send();
});

btn1.addEventListener("click", function () {
    console.log("hy")
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
        else {
            Swal.fire({
                title: "Oops!",
                text: "Error.",
                icon: "error"
            });
        }
    };
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
});


// Multiple Callback Function:- 

function loadDoc(url, func) {

    // create a XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // callback function
    xhttp.onload = function () {
        func(this);
    }

    // open the request
    xhttp.open("GET", url);

    // send the request
    xhttp.send();
}

// Define the first callback function
function myFunction1(xhttp) {
    if (xhttp.status == 200) {
        console.log("Response from URL-1:", xhttp.responseText);
        Swal.fire({
            title: "Good job!",
            text: "File SuccessFully display!",
            icon: "success"
        });
    }
    else {
        Swal.fire({
            title: "Oops!",
            text: "Failed to load URL-1",
            icon: "error"
        });
    }
}

// Define the second callback function
function myFunction2(xhttp) {
    if (xhttp.status == 200) {
        console.log("Response from URL-2:", xhttp.responseText);
        Swal.fire({
            title: "Good job!",
            text: "File SuccessFully display!",
            icon: "success"
        });
    }
    else {
        Swal.fire({
            title: "Oops!",
            text: "Failed to load URL-2",
            icon: "error"
        });
    }
}


btn2.addEventListener("click", function () {
    loadDoc("text.html", myFunction1);
});

btn3.addEventListener("click", function () {
    loadDoc("text.html", myFunction2);
});

