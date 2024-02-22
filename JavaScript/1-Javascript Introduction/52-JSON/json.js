let ans = document.getElementById("demo");

// define the json variable 
let info = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let jsonObj = JSON.parse(info);

ans.innerHTML = " jsonObj.employees[2].firstName , jsonObj.employees[2].lastName &#10170; " +  jsonObj.employees[2].firstName + jsonObj.employees[2].lastName ;