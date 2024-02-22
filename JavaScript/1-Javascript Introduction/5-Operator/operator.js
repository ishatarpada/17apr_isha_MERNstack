// arithmetic operator

let ans = document.getElementById("demo");

let a = 100;
let b = 20;

// addition
let add;
add = a + b;
ans.innerHTML = "addition :- " + add + "<br>";

// substraction
let sub;
sub = a - b;
ans.innerHTML += "substraction :- " + sub + "<br>";

// multiplication
let mul;
mul = a * b;
ans.innerHTML += "multiplication :- " + mul + "<br>";

// division
let div;
div = a / b;
ans.innerHTML += "division :- " + div + "<br>";

// modulo
let mod;
mod = a % b;
ans.innerHTML += "modulo :- " + mod + "<br>";

// increment
let inc;
inc = ++a;
ans.innerHTML += "increment :- " + inc + "<br>";

// decrement
let dec;
dec = --b;
ans.innerHTML += "decrement :- " + dec + "<br>";

// Exponentiation 
let exp;
exp = b**2;
ans.innerHTML += "Exponentiation :- " + exp + "<br>";



// assignment operator
let num = 10;
let val;
let assign_op = document.getElementById("demo-1");

num += 10;
assign_op.innerHTML = " num += 10 :- " + num + "<br>" //10+10=20

num -= 10;
assign_op.innerHTML += " num -= 10 :- " + num + "<br>" //20-10=10

num *= 10;
assign_op.innerHTML += " num *= 10 :- " + num + "<br>" //10*10=100

num /= 10;
assign_op.innerHTML += " num /= 10 :- " + num + "<br>" //100/10 =10

num **= 10;
assign_op.innerHTML += " num **= 10 :- " + num + "<br>" //10**10 = 10000000000

num %= 10;
assign_op.innerHTML += " num %= 10 :- " + num + "<br>" //10000000000%10 = 0

val ??= 10;
assign_op.innerHTML += " val ??= 10 :- " + val + "<br>" // 10



//comparison Operator
let name_1 = "john"
let name_2 = "marks"
let num_1 = 5;
let num_2 = 10;
let com_op = document.getElementById("demo-2");

com_op.innerHTML = num_1 + ">" + num_2 + " :- " + (num_1 > num_2) + "<br>";
com_op.innerHTML += num_1 + ">=" + num_2 + " :- " + (num_1 >= num_2) + "<br>";
com_op.innerHTML += num_1 + "<" + num_2 + " :- " + (num_1 < num_2) + "<br>"
com_op.innerHTML += num_1 + "<=" + num_2 + " :- " + (num_1 <= num_2) + "<br>"
com_op.innerHTML += num_1 + "==" + num_2 + " :- " + (num_1 == num_2) + "<br>"
com_op.innerHTML += num_1 + "===" + num_2 + " :- " + (num_1 === num_2) + "<br>"
com_op.innerHTML += num_1 + "!=" + num_2 + " :- " + (num_1 != num_2) + "<br>"
com_op.innerHTML += num_1 + "!==" + num_2 + " :- " + (num_1 !== num_2) + "<br>"

// string comparison
com_op.innerHTML = name_1 + ">" + name_2 + " :- " + (name_1 > name_2) + "<br>";
com_op.innerHTML += name_1 + ">=" + name_2 + " :- " + (name_1 >= name_2) + "<br>";
com_op.innerHTML += name_1 + "<" + name_2 + " :- " + (name_1 < name_2) + "<br>"
com_op.innerHTML += name_1 + "<=" + name_2 + " :- " + (name_1 <= name_2) + "<br>"
com_op.innerHTML += name_1 + "==" + name_2 + " :- " + (name_1 == name_2) + "<br>"
com_op.innerHTML += name_1 + "===" + name_2 + " :- " + (name_1 === name_2) + "<br>"
com_op.innerHTML += name_1 + "!=" + name_2 + " :- " + (name_1 != name_2) + "<br>"
com_op.innerHTML += name_1 + "!==" + name_2 + " :- " + (name_1 !== name_2) + "<br>"

// string addition and Adding Strings and Numbers
let str_1 = "have a nice";
let str_2 = "day";
let number_1 = 19;
let number_2 = "19";
let number_3 = 11;
let str_add = document.getElementById("demo-3");

str_add.innerHTML = str_1 + " + " + str_2 + " :- " + (str_1 + " " + str_2) + "<br>";
str_add.innerHTML += number_1 + " + " + number_2 + " :- " + (number_1 + number_2) + "<br>";
str_add.innerHTML += number_1 + " + " + number_3 + " :- " + (number_1 + number_3) + "<br>";
str_add.innerHTML += str_1 + " + " + number_3 + " :- " + (str_1 + number_3) + "<br>";
str_add.innerHTML += str_2 + " + " + number_2 + " :- " + (str_2 + number_2) + "<br>";


// logical Operator
let age_1 = 19;
let age_2 = 25;
let age_3 = 10;
let logic_op = document.getElementById("demo-4");

logic_op.innerHTML = age_1 + " > 18 " + " && " + age_2 + " > 18 :- " + ( age_1 > 18 && age_2 > 18) + "<br>";
logic_op.innerHTML += age_3 + " > 18 " + " || " + age_2 + " > 18 :- " + ( age_3 > 18 || age_2 > 18) + "<br>";
logic_op.innerHTML += " ! " + age_3 + " > 18 " +  " :- " + !( age_3 > 18) + "<br>";


// bitwise  operator
let bit_1 = 5 ; // 5 = 0101
let bit_2 = 1 ; // 1 = 0001
let bit_op = document.getElementById("demo-5");

bit_op.innerHTML = bit_1 + " & " + bit_2 + " :- " + (bit_1 & bit_2) + "<br>"; //0001 = 1
bit_op.innerHTML += bit_1 + " | " + bit_2 + " :- " + (bit_1 | bit_2) + "<br>"; //0101 = 5 
bit_op.innerHTML += " ~ " + bit_1 + " :- " + ~ 5 + "<br>"; //1010 = 10
bit_op.innerHTML += bit_1 + " ^ " + bit_2 + " :- " + (bit_1 ^ bit_2) + "<br>"; //0100 = 4
bit_op.innerHTML += bit_1 + " >> " + bit_2 + " :- " + (bit_1 >> bit_2) + "<br>"; //1010 = 10
bit_op.innerHTML += bit_1 + " << " + bit_2 + " :- " + (bit_1 << bit_2) + "<br>"; //0010 = 2

