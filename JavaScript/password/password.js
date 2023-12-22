let password = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener("click" , showPassword);

function showPassword(){
    if (password.type === 'password') {
        password.type = 'text';
        btn.textContent = 'Hide Password';
      } else {
        password.type = 'password';
        btn.textContent = 'Show Password';
      }
}
