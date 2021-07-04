import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TechnologyHeader() {
  const isAuth = useSelector((state) => state.LoginReducer.token);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  rofont">
      <Link className="navbar-brand ml-5 mb-2" to="/">
        /
        <img src="images/logowhite.png" width="200" alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item ">
            <Link className="nav-link " to="/">
              HOME{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order">
              ORDER
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link activeLink" to="/technology">
              TECHNOLOGY
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/application">
              APPLICATION
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">
              CONTACT US
            </Link>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          {isAuth ? null : (
            <>
              <Link
                to="/login"
                className="btn  my-2 my-sm-0 mr-3 "
                style={{ color: "#fff" }}
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-light my-2 mr-5 my-sm-0"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default TechnologyHeader;
