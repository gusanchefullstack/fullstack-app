// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./updateUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const updatedUser = {
    name: "",
    email: "",
    country: "",
  };
  const [user, setUser] = useState(updatedUser);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3003/api/v1/users/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios
      .put(`http://localhost:3003/api/v1/users/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
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
      <h3>Update User</h3>
      <form
        action=""
        // method="put"
        className="addUserForm"
        onSubmit={submitForm}
      >
        <div className="inputGruop">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
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
            value={user.email}
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
            value={user.country}
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

export default UpdateUser;
