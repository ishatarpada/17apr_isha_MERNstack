let ans = document.getElementById("demo");

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data : ", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 7000);
//     });
// }

// getData(1).then((res) => {
//     console.log(res);
// });

// getData(1).catch((err) => {
//     console.log(err);
// });

// const numbers = [4256, 32223, 5652, -25125, 35415, -891652, 2341, -47461, -62152];

// ans.innerHTML += numbers + "<br>";

// function showNumbers(i) {
//     return i >= 0;
// }

// function printNumbers(i) {
//     return i < 0;
// }

// function display(callback) {
//     return new Promise((resolve, reject) => {
//         const arr = [];

//         for (const i of numbers) {
//             if (callback(i)) {
//                 arr.push(i);
//             }
//         }

//         if (arr.length > 0) {
//             resolve(arr);
//         } else {
//             reject(arr);
//         }
//     });
// }

// display(showNumbers)
//     .then(result => {
//         ans.innerHTML += "Correct IDs &#10170; " + result.join(", ") + " <br> ";
//     })
//     .catch(error => {
//         ans.innerHTML += "None";
//     });

// ans.innerHTML += "<br>";

// display(printNumbers)
//     .then(result => {
//         ans.innerHTML += "None";
//     })
//     .catch(error => {
//         ans.innerHTML += "Incorrect IDs &#10170; " + error.join(", ");
//     });

function printResult() {
    let a = 56;
    let b = -78;
    let ans = a + b;
    return ans;
}

function addition(callback) {
    return new Promise((resolve, reject) => {
        let sum = callback(); // Invoke the callback to get the sum

        if (sum >= 0) {
            resolve("ans is positive");
        } else {
            reject("ans is negative");
        }
    });
}

addition(printResult)
    .then(result => {
        console.log("Success");
    })
    .catch(error => {
        console.log("Error");
    });

const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function (value) {
    ans.innerHTML += value;
});

function myDisplayer(some) {
    ans.innerHTML += some;
}

function showFile() {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();

        req.open('GET', "photoGallery.html");
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject("File not found");
            }
        };
        req.send();
    });
}

showFile(myDisplayer).then(result => {
    console.log("Success , File is found");
})
showFile(myDisplayer).catch(error => {
    console.log("File not found");
});


function asyncFunction() {
    let num = prompt("Enter the value: ");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num !== "" && num !== " ") {
                resolve(num);
            } else {
                reject("Error: Input is empty");
            }
        }, 3000);
    });
}

const promise = asyncFunction();

promise.then((res) => {
    console.log("Success:", res);
}).catch((err) => {
    console.log("Error:", err);
});

function asyncFunction1(getId) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Id is ", getId);
            resolve("Success");
        }, 4000);
    });
}

// Promise chain

console.log("fetching data1.....")
asyncFunction1(1).then((res) => {
    console.log(res);
    console.log("fetching data2.....")
    asyncFunction1(2).then((res) => {
        console.log(res);
        console.log("fetching data3.....")
        asyncFunction1(3).then((res) => {
            console.log(res);
            console.log("fetching data4.....")
            asyncFunction1(4).then((res) => {
                console.log(res);
            });
        });
    });
});

