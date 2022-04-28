import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <form className="container">
      <div
        className="card text-dark bg-light"
        style={{ width: "50%", margin: "auto" }}
      >
        <h3 class="card-header">Login</h3>
        <div class="card-body">
          <div className="row">
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
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
