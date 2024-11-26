/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/v1/users");
        console.log(response.data);
        console.log(response);
        setUsers(response.data.users);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
        await axios
        .delete(`http://localhost:3003/api/v1/users/${userId}`)
          .then(async (response) => {
            toast.success(response.data.message, { position: "top-right" });
            const updatedTable = await axios.get("http://localhost:3003/api/v1/users");
            console.log(updatedTable.data);
             setUsers(updatedTable.data.users);
          }
        ).catch((error) => {
          console.log("Error while deleting data", error);
        }) 
  };
  return (
    <div className="userTable">
      <Link to="/add" type="button" className="btn btn-primary">
        Add User <i className="fa-solid fa-user-plus"></i>
      </Link>
      {users.length === 0 ? (
        <div className="noData">
          <h3>No data to display</h3>
          <p>Please add new user</p>
        </div>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  <td className="actionButtons">
                    <Link
                      to={`/update/${user.id}`}
                      type="button"
                      className="btn btn-info"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                      type="button"
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
