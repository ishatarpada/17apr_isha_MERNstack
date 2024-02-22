let fetchBtn = document.getElementById("fetch");
let back_upBtn = document.getElementById("back-up");

fetchBtn.addEventListener("click", function () {
        console.log("You have clicked the button");

        // create xhr object
        const xhr = new XMLHttpRequest();

        // open the object
        // xhr.open("GET" , "https://jsonplaceholder.typicode.com/todos/1" , true);
        // xhr.open("POST" , "http://restapi.adequateshop.com/api/Tourist" , true);
        // xhr.getResponseHeader("content-type" , "application/json")



        // callback function
        //progress 
        xhr.onprogress = function () {
                console.log("on progress data");
        }

        // onload data
        xhr.onload = function () {
                if (this.status == 200) {
                        console.log(this.responseText);
                }
                else {
                        console.error("error occurred")
                }
        }

        // onreadystatechange
        xhr.onreadystatechange = function () {
                console.log("ready state is ", xhr.readyState);
        }

        // send the request
        para = `
        { 
                "tourist_name": "Mike",      
                "tourist_email": "mike123@gmail.com",                  "tourist_location": "Paris"
        }`;
        xhr.send(para);

        console.log("we are done");
});

back_upBtn.addEventListener("click", function () {
        console.log("You have clicked the button");

        // create xhr object
        const xhr = new XMLHttpRequest();


        // Open the object
        xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


        // callback function
        // onload data
        xhr.onload = function () {
                if (this.status === 200) {
                        let obj = JSON.parse(this.responseText);
                        console.log(obj);
                        let list = document.getElementById('list');
                        str = "";
                        for (i in obj) {
                                str += `<li>${obj[i].employee_name} </li>`;
                        }
                        list.innerHTML = str;
                }
                else {
                        console.log("Some error occurred")
                }
        }

        // onreadystatechange
        xhr.onreadystatechange = function () {
                console.log("ready state is ", xhr.readyState);
        }

        // send the request
        xhr.send();

        console.log("we are done");
});