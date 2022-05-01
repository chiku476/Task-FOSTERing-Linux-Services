import { React, useState } from "react";
import Form from "./Form";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Link } from "react-router-dom";

const SingleUser = ({ user }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const onDeleteHandler = async (id) => {
    console.log(id);
    fetch(`http://localhost:8080/users/${id}`, { method: "DELETE" }).then(
      () => {
        window.location.reload(true);
        window.alert("Delete successful");
      }
    );
  };
  const onEditHandler = (user) => {
    setIsEditClicked(true);
    <Form user={user} />;
    setIsEditClicked(true);
    console.log(user);
  };

  return (
    <tr className="m-1">
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.mobile}</td>
      <td>{user.email}</td>
      <td>
        <div>
          <span>
            <button
              className="btn btn-danger"
              onClick={() => {
                onDeleteHandler(user.id);
              }}
            >
              <span>
                <DeleteIcon />
              </span>
            </button>
          </span>
          <span className="m-1">
            <Link class="btn btn-primary mr-2" to={`/addNew/${user.id}`}>
              <span>
                <EditIcon />
              </span>
            </Link>
          </span>
        </div>
      </td>
    </tr>
  );
};
export default SingleUser;
