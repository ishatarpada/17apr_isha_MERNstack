let ans = document.getElementById("demo")

for(let i = 0 ; i < 10 ; i++){
    if(i == 3){
        continue;
    }
    ans.innerHTML += i + "  ";
}