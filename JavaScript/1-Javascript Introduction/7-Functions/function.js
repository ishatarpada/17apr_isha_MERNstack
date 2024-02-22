let mul = document.getElementById("demo");

function multiplication(num_1, num_2) {
    return num_1 * num_2;
}

mul.innerHTML = multiplication(25, 5);

let value = document.getElementById("demo-1")

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

value.innerHTML = toCelsius(77) + "<br>";
value.innerHTML += toCelsius + "<br>";
value.innerHTML += toCelsius() + "<br>";

// Functions Used as Variable Values

let information = document.getElementById("demo-2");
function info(name, age) {
    document.write(name + " ");
    document.write(age);
}

let info_1 = info("isha", 21);
information.innerHTML = info_1 + "<br>";
information.innerHTML += info(" Isha ", 21);


// local variable
let local_var = document.getElementById("demo-3");
local_var.innerHTML = "Outside: " + typeof carName;

function car() {
    let carName;
    carName = "Volvo"; 
    let text = "Inside: " + typeof carName + " " + carName;
    local_var.innerHTML = text;
}

car();
