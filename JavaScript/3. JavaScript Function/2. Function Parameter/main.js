let ans = document.getElementById("demo");

function addition(x , y){
    if(y == undefined && x == undefined){
        y = 2 ;
        x = 5 ;
        return x +  y;
    }
    else{
         return x + y ;
    }
}

ans.innerHTML += addition() + "<br>";
ans.innerHTML += addition(1 , 3) + "<br>";

function sum(...args){
    let sum = 0 ;
    for(let i of args){
        sum += i ;
    }
    ans.innerHTML += sum + "<br>";
}

sum(12 , 56 , 23 , 78 , 89);

findMax(1 , 45 , 2356 , 125 , 7892);

function findMax(){
    let max = -Infinity;
    let sum = 0;
    let n = arguments.length;
    for(let i = 0 ; i < n ; i ++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    for(let i = 0 ; i < n ; i++){
        sum += arguments[i];
    }
    ans.innerHTML += max + "<br>";
    ans.innerHTML += sum + "<br>";
}