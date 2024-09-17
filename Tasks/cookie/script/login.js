const rememberMeCheckbox = document.getElementById('formCheck');
const loginForm = document.querySelector('form');
const submit = document.getElementById("submit");

submit.addEventListener("click" , function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Isha" && password === "isha@123" && rememberMeCheckbox.checked) {
        document.cookie = `username=${username}; expires=Fri, 12 Apr 2024 23:59:59 GMT; path=/`;
        document.cookie = `password=${password}; expires=Fri, 12 Apr 2024 23:59:59 GMT; path=/`;
    }
});