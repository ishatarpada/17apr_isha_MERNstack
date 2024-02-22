let ans_str = document.getElementById("demo");

let tem_str = `<b><h1>Template String</h1><b>`
ans_str.innerHTML += tem_str + "<br><br>";

let tem_str_1 = `This is "Template string". `;
ans_str.innerHTML += tem_str_1 + "<br><br>";

let tem_str_2 = `This is 'Template string'. `;
ans_str.innerHTML += tem_str_2 + "<br><br>";

let multiple_str =
    `The quick
brown fox
jumps over
the lazy dog`;
ans_str.innerHTML += multiple_str + "<br><br>";


// Variable Substitutions
let var_1 = " isha";
let var_2 = " patel";

let fullName = ` welcome to ${var_1} ${var_2} in our office..`;
ans_str.innerHTML += fullName + "<br><br>"


// Expression Substitution
let num_1 = 56;
let num_2 = 2;

let add = ` addition of 56 and 2 is :- ${num_1 + num_2}.`;
ans_str.innerHTML += add + "<br><br>"

let header = `Navbar`;
let list = ["home", "menu", "account"];

let html = `<h2>${header}</h2><ul>`;

for (let item of list) {
    html += `<li>${item}</li>`;
}

html += `</ul>`;
ans_str.innerHTML += html;
