/* 1st type handle http request
 const test = () => {
   fetch('https://jsonplaceholder.typicode.com/photos')
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
     })
     .catch((error) => {
       console.error("Error fetching users:", error);
     });

 } */

/*  // 2nd type handle http request
 const test = () => {
   fetch('https://jsonplaceholder.typicode.com/photos')
     .then((response) => {
       console.log("Success", response.json())
     })
     .catch((error) => {
       console.error("Error fetching users:", error);
     }); */