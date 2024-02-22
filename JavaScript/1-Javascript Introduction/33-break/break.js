let ans = document.getElementById("demo")

for(let i = 0 ; i < 10 ; i++){
    if(i == 5){
        break;
    }
    ans.innerHTML += i + "  ";
}