import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

import { userService } from "../axiosAPI/AuthService";

export default function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    password: "",
    matchPassword: "",
  });
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password && user.password === user.matchPassword) {
      userService
        .signup(user)
        .then((e) => {
          toast.success("New user is created", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
          });
          setUser({
            name: "",
            password: "",
            matchPassword: "",
          });
          setTimeout(() => {
            history.push("/login");
          }, 3000);
        })
        .catch((e) => {
          toast.error(`${e}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
          });
        });
    }
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError(() => {
      const stateObj = { [name]: "" };
      if (user.password && value !== user.password) {
        stateObj[name] = "Password and Confirm Password does not match.";
      }
      return stateObj;
    });
  };

  return (
    <form className="container" autoComplete="off" onSubmit={handleSubmit}>
      <div
        className="card text-dark bg-light"
        style={{ width: "50%", margin: "auto" }}
      >
        <h3 className="card-header">Sign Up</h3>
        <div className="card-body">
          <div className="row">
            <div className="mb-3">
              <label>Email address</label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={user.name}
                name="name"
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={user.password}
                name="password"
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Enter confirm password"
                value={user.matchPassword}
                name="matchPassword"
                onChange={(e) => {
                  setUser({ ...user, [e.target.name]: e.target.value });
                  validateInput(e);
                }}
              />
              {error?.matchPassword && (
                <div className="my-1 text-danger">{error.matchPassword}</div>
              )}
            </div>
            <div className="d-grid col-md-3 offset-md-9">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={
                  error?.matchPassword || !user.matchPassword || !user.password
                }
              >
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <Link to="/login">sign in?</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
}
