let ans = document.getElementById("demo");

let number = parseInt(prompt("enter the number :- "));

// print the  number
ans.innerHTML = `Numbers. <br>`
for(let i = 0 ; i <= number ; i++){    
        ans.innerHTML += i + "  ";
}

// print the even number.
ans.innerHTML += `<br><br> Even Numbers. <br>`
for(let i = 0 ; i < number ; i++){
    if(i % 2 == 0){
        ans.innerHTML += i + "  ";
    }
}

// print the odd number.
ans.innerHTML += `<br><br> Odd Numbers. <br>`
for(let i = 0 ; i < number ; i++){
    if(i % 2 != 0){
        ans.innerHTML += i + "  ";
    }
}

// print number of sum
ans.innerHTML += `<br><br> Sum of ${number} Numbers. <br>`
let sum = 0;
for(let i = 0 ; i < number ; i++){
    sum += i;
}
ans.innerHTML += sum + " <br> ";

// print the reverse number
ans.innerHTML += `<br> Reverse Numbers. <br>`
for(let i = number ; i > 0 ; i--){    
        ans.innerHTML += i + "  ";
}