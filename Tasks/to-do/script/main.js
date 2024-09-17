var inputData = document.getElementById("inputData");
var addBtn = document.getElementById("addBtn");
var list = document.getElementById("list")
var addData = document.getElementById("addData");

// let editItem = null;
inputData.addEventListener("keypress", function () {
    addBtn.disabled = false;
});

addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var newItem = inputData.value.trim();


    // if (submit.value != "Add") {
    //     editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;
    //     submit.value = "Add";
    //     document.getElementById("item").value = "";
    //     Swal.fire({
    //         title: "success",
    //         text: "Items Updated  successfully",
    //         icon: "success"
    //     })
    //     return false;
    // }


    if (newItem === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
        return false;
    }
    let li = document.createElement("li");
    li.className = "list-group-item mt-2 fs-2 text-dark fw-bolder border border-bottom";
    li.appendChild(document.createTextNode(newItem));

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger fs-4 float-end bi bi-x-lg mx-2 btn-lg fw-bolder";

    deleteBtn.addEventListener("click", function () {
        list.removeChild(li);
    });

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-info fs-4 text-light float-end bi bi-pencil-square mx-2 btn-lg fw-bolder";

    editBtn.addEventListener("click", function () {
        // var list = document.getElementById("list")
        addBtn.innerText = "update";
        inputData.value = li.textContent;
        editItem.inputData;
    });

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
    addBtn.disabled = true;
    // inputData.value = "";
    inputData.value = "";
    // list.appendChild(editBtn);



});
