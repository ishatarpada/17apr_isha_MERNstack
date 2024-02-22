let ans = document.getElementById("demo");

function displayInfo() {
    ans.innerHTML += "id is 12345 <br>";
}

function info(callback) {
    callback(displayInfo);
}

info(displayInfo);

// callback
const numbers = [4 , 32, 56 , 25 , 3 , -89 , 23 , -47 , 6];
ans.innerHTML += numbers + "<br>";

function showNumbers(i){
    if(i >= 0){
        ans.innerHTML += i + " ";
    }
}

function removeNum(numbers , callback){
    const arr = [];

    for(const i of numbers){
        if(callback(i)){
            arr.push(i);
        }
    }
    return arr;
}

removeNum(numbers , showNumbers)
console.log("Filtered Numbers :- " , removeNum(numbers , showNumbers));
ans.innerHTML += "<br>"

// callback hell

function getData(id, getNextData) {
    setTimeout(() => {
        ans.innerHTML += " my id is &#10170; " + id + "<br>";
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}
getData(1, () => {
    alert("getting data 1.....");
    getData(2, () => {
        alert("getting data 2.....");
        getData(3, () => {
            alert("getting data 3.....");
            getData(4, () => {
                alert("getting data 4.....");
                getData(5 , () =>{
                    alert("getting data 5.....");
                });
            });
        });
    });
});

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.open('GET', "photoGallery.html");
    req.send();
  }
  
  getFile(myDisplayer); 