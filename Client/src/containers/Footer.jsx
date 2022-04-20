import React from "react";

export default function Footer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-2 border-top">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <img
              src="https://kamyabrouhifar.ca/img/logo.png"
              alt="Kamyab Icon"
              width="80"
              height="80"
            />
            <small className="d-block mb-3 text-muted">
              &copy; 2022 - Kamyab Rouhifar
            </small>
          </div>
          <div className="col-6 col-md-3">
            <h5>Contact</h5>
            <p>
              Website: &nbsp;
              <a
                href="https://kamyabrouhifar.ca"
                target="_blank"
                rel="noreferrer"
              >
                Kamyab Portfolio
              </a>
            </p>
            <p>
              Github: &nbsp;
              <a
                href="https://github.com/karouhifar"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
            </p>
          </div>
          <div className="col-6 col-md-3">
            <h5>Resources</h5>
            <a
              href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0"
              target="_blank"
              rel="noreferrer"
            >
              ASP.NET documentation
            </a>
            <br />
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              ReactJS - A JavaScript library
            </a>
            <br />
            <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
              Redux - Predictable State Container
            </a>
          </div>
          <div className="col-6 col-md-3">
            <h5>About</h5>
            <small>
              Simple Application using React/Redux as Client-side, For the
              server-side is implemented by using ASP.NET Core.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
