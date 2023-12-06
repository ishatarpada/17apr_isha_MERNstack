function showContent(){
    let fnm = document.getElementById("fnm");
    let lnm = document.getElementById("lnm");

    const Employee = {
        firstname: 'John',
        lastname: 'Doe',
      };
      
      fnm.innerHTML = Employee.firstname
      lnm.innerHTML = Employee.lastname
}

function deleteContent(){
    let fnm = document.getElementById("fnm");
    let lnm = document.getElementById("lnm");

    const Employee = {
        firstname: 'John',
        lastname: 'Doe',
      };
      delete Employee.firstname;
      fnm.innerHTML = Employee.firstname
}