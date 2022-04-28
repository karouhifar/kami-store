import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userService } from "../axiosAPI/AuthService";
export default function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password && user.name) {
      userService.login(user).then((e) => {
        console.log(e);
        setUser({
          name: "",
          password: "",
        });
      });
    }
  };

  return (
    <form className="container" autoComplete="off" onSubmit={handleSubmit}>
      <div
        className="card text-dark bg-light"
        style={{ width: "50%", margin: "auto" }}
      >
        <h3 className="card-header">Login</h3>
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
            <div className="d-grid col-md-3 offset-md-9">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Don't have account <Link to="/register">sign up?</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
