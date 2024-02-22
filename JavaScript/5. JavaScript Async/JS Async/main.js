let ans = document.getElementById("demo");

function getWhether() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("whether data");
        }, 2000);
    });
}

async function getWhetherAllData() {
    await getWhether();
    await getWhether();
    await getWhether();
    await getWhether();
}

function getId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Id is ", id);
            resolve("Success");
        }, 2000);
    });
}

(async function getAllID() {
    console.log("fetching data1.....");
    await getId(1);
    console.log("fetching data2.....");
    await getId(2);
    console.log("fetching data3.....");
    await getId(3);
    console.log("fetching data4.....");
    await getId(4);
    console.log("fetching data5.....");
    await getId(5);
    console.log("fetching data6.....");
    await getId(6);
    console.log("fetching data7.....");
    await getId(7);
})();


async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "photoGallery.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  getFile();