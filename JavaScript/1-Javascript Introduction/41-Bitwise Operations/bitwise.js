let bit_op = document.getElementById("demo");

// bitwise  operator
let bit_1 = 5; // 5 = 0101
let bit_2 = 1; // 1 = 0001

bit_op.innerHTML = bit_1 + " & " + bit_2 + " &#10170; " + (bit_1 & bit_2) + "<br>"; //0001 = 1
bit_op.innerHTML += bit_1 + " | " + bit_2 + " &#10170; " + (bit_1 | bit_2) + "<br>"; //0101 = 5 
bit_op.innerHTML += " ~ " + bit_1 + " &#10170; " + ~5 + "<br>"; //1010 = 10
bit_op.innerHTML += bit_1 + " ^ " + bit_2 + " &#10170; " + (bit_1 ^ bit_2) + "<br>"; //0100 = 4
bit_op.innerHTML += bit_1 + " >> " + bit_2 + " &#10170; " + (bit_1 >> bit_2) + "<br>"; //1010 = 10
bit_op.innerHTML += bit_1 + " << " + bit_2 + " &#10170; " + (bit_1 << bit_2) + "<br><br>"; //0010 = 2


//Converting Decimal to Binary

//  dec2bin(5) => 5>>>0 => 5 => 5.toString(2) =>101
bit_op.innerHTML += " dec2bin(5) &#10170; " + dec2bin(5) + "<br>";
bit_op.innerHTML += " dec2bin(-5) &#10170; " + dec2bin(-5) + "<br>";
bit_op.innerHTML += " dec2bin(10) &#10170; " + dec2bin(10) + "<br><br>";

function dec2bin(dec) {
    if (dec < 0) {
        return '-' + (-dec >>> 0).toString(2);
    } else {
        return (dec >>> 0).toString(2);
    }
}

//Converting Binary to Decimal
bit_op.innerHTML += " bin2dec(101) &#10170; " + bin2dec(101) + "<br>";
bit_op.innerHTML += " bin2dec(-101) &#10170; " + bin2dec(-101) + "<br>";
bit_op.innerHTML += " bin2dec(1000) &#10170; " + bin2dec(1000) + "<br><br>";
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}