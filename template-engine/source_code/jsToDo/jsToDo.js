let addBtn = document.getElementById("addTaskBtn");
let clearBtn = document.getElementById("clearAllBtn");
addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAll);
document.addEventListener("DOMContentLoaded", showInTable);

function addTask() {
    if (localStorage.getItem("TODOlist") == null) {
        let subject = document.getElementById("subject").value;
        let description = document.getElementById("description").value;
        let arrayItems = [];
        arrayItems.push([subject, description]);
        localStorage.setItem("TODOlist", JSON.stringify(arrayItems));
    }
    else {
        let arrayItems = JSON.parse(localStorage.getItem("TODOlist"));
        let subject = document.getElementById("subject").value;
        let description = document.getElementById("description").value;
        arrayItems.push([subject, description]);
        localStorage.setItem("TODOlist", JSON.stringify(arrayItems));
    }
    showInTable();
}

function showInTable() {
    var tableBody = document.getElementById("tableBody");
    let arrayItems = JSON.parse(localStorage.getItem("TODOlist"));
    let str = "";
    if (arrayItems != null) {
        arrayItems.forEach((element, index) => {
            str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button type="button" class="btn btn-primary" onclick="deleteIem(${index})">Delete</button>
            </td>
          </tr>
          `;
        });
    }
    tableBody.innerHTML = str;

}

function clearAll() {
    console.log("Deleting All");
    if (confirm("Are you sure???")) {
        localStorage.removeItem("TODOlist");
        showInTable();
    }
}

function deleteIem(index) {
    let arrayItems = JSON.parse(localStorage.getItem("TODOlist"));
    arrayItems.splice(index,1);
    localStorage.setItem("TODOlist",JSON.stringify(arrayItems));
    showInTable();
}