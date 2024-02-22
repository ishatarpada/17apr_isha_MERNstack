let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();

// Worker script (worker.js)
self.onmessage = function(event) {
  console.log('Received message from main script:', event.data);
  
  // Simulate heavy task
  const result = doHeavyTask();
  
  // Send result back to main script
  self.postMessage(result);
};

function doHeavyTask() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}