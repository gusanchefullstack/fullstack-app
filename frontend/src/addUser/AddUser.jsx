// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./addUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const newUser = {
    name: "",
    email: "",
    country: "",
  };

  const [user, setUser] = useState(newUser);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3003/api/v1/users", user)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        toast.success(response.data.message, {position:"top-right"})
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>
      <h3>Add New User</h3>
      <form
        action=""
        method="post"
        className="addUserForm"
        onSubmit={submitForm}
      >
        <div className="inputGruop">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your name"
          />
        </div>
        <div className="inputGruop">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your email"
          />
        </div>
        <div className="inputGruop">
          <label htmlFor="name">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your country"
          />
        </div>
        <div className="inputGruop">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
