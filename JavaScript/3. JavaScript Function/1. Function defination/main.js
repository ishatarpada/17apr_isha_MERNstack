let ans = document.getElementById("demo");

add();

function add(){
    ans.innerHTML += (5 + 6) + "<br>";
    return;
}

const sub = function(a , b){
   return a - b;
}

ans.innerHTML += sub(5 , 4) + "<br>";

const mul = new Function('a', 'b', 'return a * b');
ans.innerHTML += mul(5 , 4);

(function division(){
    ans.innerHTML += "<br>" + (25 / 5 ) + "<br>";
})();

ans.innerHTML += increment(5) + "<br>";
ans.innerHTML += decrement(5).toString() + "<br>";

function increment(a){
    return arguments.length;
}

function decrement(a){
    return --a;
}

const printInfo = () =>{
    ans.innerHTML += " hello good morning !"
};
printInfo();