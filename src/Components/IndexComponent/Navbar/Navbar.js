import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutHandlerAction } from "../../../store/ducks/Login/Login";

function Navbar() {
  const isAuth = useSelector((state) => state.LoginReducer.token);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light g-transparent rofont position-absolute w-100">
        <Link className="navbar-brand ml-5 mb-2" to="/">
          <img src="images/logo.png" width="200" alt="" />
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
              <Link className="nav-link activeLink" to="/">
                HOME{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">
                ORDER
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
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
            {isAuth ? (
              <Link
                to="/login"
                className="btn btn-primary my-2 my-sm-0 mr-3 mainbg"
                onClick={() => dispatch(logoutHandlerAction())}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary my-2 my-sm-0 mr-3 mainbg"
                >
                  Sign in
                </Link>
              </>
            )}
            <Link
              to="/emergency"
              className="btn btn-outline-danger my-2 my-sm-0"
            >
              Emergency Case
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
