const ans = document.getElementById("demo");
const btn2 = document.getElementById("btn2");
const btn1 = document.getElementById("btn1");

let w;
btn1.addEventListener("click" , function(){
    if(typeof(w) == "undefined"){
        w = new Worker("demo.js");
    }
    w.onmessage = function(event){
        ans.innerHTML += event.data + " " ;
    }
});

btn2.addEventListener("click" , function stopWorker(){
    w.terminate();
    w = undefined;
})


// Main script (index.js)
const worker = new Worker('demo.js');

worker.onmessage = function(event) {
  console.log('Received message from worker:', event.data);
};

worker.postMessage('Hello from main script!');