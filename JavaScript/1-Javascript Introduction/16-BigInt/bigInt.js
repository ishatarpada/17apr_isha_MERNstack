let big_num = document.getElementById("demo");

let num = 123456789012345678901234567890;
let num_1 = 123456789012345678901234567890n;
let num_2 = BigInt("123456789012345678901234567890");

big_num.innerHTML = num + "<br>";
big_num.innerHTML += num_1 + "<br>";
big_num.innerHTML += num_2 + "<br>";
big_num.innerHTML += num_2 + " Type is :- " + typeof num_2 + "<br><br>";

// bigInt operator
let num_3 = 9007199254740995n;
let num_4 = 9007199254740995n;

let add = num_3 + num_4;
let sub = num_3 - num_4;
let mul = num_3 * num_4;
let div = num_3 / num_4;
big_num.innerHTML += "addition of big integer value is :- " + add + "<br>";
big_num.innerHTML += "substraction of big integer value is :- " + sub + "<br>";
big_num.innerHTML +=
  "multiplication of big integer value is :- " + mul + "<br>";
big_num.innerHTML += "division of big integer value is :- " + div + "<br><br>";

// bigInt value write in Hexadecimal , octal and binary but can not write decimal number.
let num_5 = 10n;
let div_2 = Number(num_5) / 2;

big_num.innerHTML +=
  " two different data types division is not possible, but using type conversion, the answer is: " +
  div_2 +
  "<br><br>";

let hex_num = 0x20000000000003n;
let oct_num = 0o400000000000000003n;
let bin_num = 0b100000000000000000000000000000000000000000000000000011n;

big_num.innerHTML +=
  "0x20000000000003n hexadecimal number is convert into normal number :- " +
  hex_num +
  "<br>";
big_num.innerHTML +=
  "0o400000000000000003n octal number number is convert into normal number :- " +
  oct_num +
  "<br>";
big_num.innerHTML +=
  "0b100000000000000000000000000000000000000000000000000011n binary number is convert into normal number :- " +
  bin_num +
  "<br><br>";

// Precision Curiosity :- round figure of number.
let num_6 = 9007199254740992;
let num_7 = 9007199254740993;

big_num.innerHTML +=
  "9007199254740992 is equal to 9007199254740993 ? " +
  (num_6 === num_7) +
  "<br><br>";

// Minimum and Maximum Safe Integers.
let max_num = Number.MAX_SAFE_INTEGER;
let min_num = Number.MIN_SAFE_INTEGER;

big_num.innerHTML += "Maximum Safe Integer is :- " + max_num + "<br>";
big_num.innerHTML += "Minimum Safe Integer is :- " + min_num + "<br><br>";

// New Number Methods :- isInteger() , isSafeInteger();
big_num.innerHTML += num_7 + " is  integer or not ? " + Number.isInteger(num_7) + "<br>";
big_num.innerHTML += num_7 + " is safe integer or not ? " + Number.isSafeInteger(num_7) + "<br></br>";
big_num.innerHTML += 10 + " is  integer or not ? " + Number.isInteger(10) + "<br>";
big_num.innerHTML += 10 + " is safe integer or not ? " + Number.isSafeInteger(10) + "<br></br>";
