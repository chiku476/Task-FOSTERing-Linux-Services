import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = (props) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");

  const { id } = useParams();
  console.log(id);

  const onFnameChange = (e) => {
    setFirstName(e.target.value);
  };
  const onLnameChange = (e) => {
    setLastName(e.target.value);
  };
  const onemailChange = (e) => {
    setEmail(e.target.value);
  };
  const onMobileChange = (e) => {
    setmobile(e.target.value);
  };

  useEffect(() => {
    if (id != undefined) {
      const getUser = async (id) => {
        try {
          const resultFetch = await fetch(`http://localhost:8080/users/${id}`);
          const result = await resultFetch.json();

          console.log(result);
          setFirstName(result.firstName);
          setLastName(result.lastName);
          setEmail(result.email);
          setmobile(result.mobile);

          console.log(result.firstName);
        } catch (err) {
          console.log(err);
        }
      };
      getUser(id);
    }
  }, []);

  const updateHandler = async (e, id) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
      }),
    };
    fetch(`http://localhost:8080/users/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        window.alert("Data Updated" + JSON.stringify(data));
        window.location.href = "http://localhost:3000/viewAll";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
      }),
    };
    fetch("http://localhost:8080/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        window.alert("Data Submitted");
        window.location.href = "http://localhost:3000/viewAll";
      });
  };

  return (
    <div>
      {id ? (
        <>
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              variant="filled"
              required
              value={firstName}
              onChange={(e) => onFnameChange(e)}
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              value={lastName}
              onChange={(e) => onLnameChange(e)}
            />
            <TextField
              label="Email"
              variant="filled"
              type="email"
              required
              value={email}
              onChange={(e) => onemailChange(e)}
            />
            <TextField
              label="mobile"
              variant="filled"
              type="text"
              required
              value={mobile}
              onChange={(e) => onMobileChange(e)}
            />
            <div>
              <Button
                onClick={(e) => {
                  updateHandler(e, id);
                }}
                variant="contained"
                color="primary"
              >
                Update
              </Button>
            </div>
          </form>
        </>
      ) : (
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="filled"
            required
            value={firstName}
            onChange={(e) => onFnameChange(e)}
          />
          <TextField
            label="Last Name"
            variant="filled"
            required
            value={lastName}
            onChange={(e) => onLnameChange(e)}
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={(e) => onemailChange(e)}
          />
          <TextField
            label="mobile"
            variant="filled"
            type="text"
            required
            value={mobile}
            onChange={(e) => onMobileChange(e)}
          />
          <div>
            <Button
              onClick={(e) => handleSubmit(e)}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
