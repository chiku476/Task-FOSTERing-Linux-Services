import React from "react";

const User = () => {
  fetch("http://localhost:8080/users")
    .then((response) => response.json())
    .then((value) => {
      console.log(value);
      function buildTable(array) {
        var table = document.getElementById("myTable");
        for (var i = 0; i < value.length; i++) {
          var row = `<tr>
                          <td>${array[i].id}</td>
                          <td>${array[i].email}</td>
                          <td>${array[i].firstName}</td>
                          <td>${array[i].lastName}</td>
                          <td>${array[i].mobile}</td>
                          
                         </tr>`;
          table.innerHTML += row;
        }
      }
      buildTable(value);
    })
    .catch((error) => {
      console.log(error);
      alert(`Error With Status`);
    });
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <table class="table table-striped table-responsive">
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile</th>
            </tr>
            <tbody id="myTable"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
