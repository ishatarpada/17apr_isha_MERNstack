const btn = document.getElementById("btn");
const ans = document.getElementById("demo");

btn.addEventListener("click" , function(){

    // create object for the send the http request.
    const xhttp = new XMLHttpRequest();

    // callback function
    xhttp.onload = function(){
        ans.innerHTML = this.responseText;
    }

    // Open the XMLHttpRequest object
    xhttp.open("GET" , "AJAX-introduction.html");

    // Send a Request to a server
    xhttp.send();
})