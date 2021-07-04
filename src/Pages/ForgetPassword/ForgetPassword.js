import React from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="logbody">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form action="" className="loginform rofont p-5">
              <Link className="mr-3 lognavlink" to="/login">
                {" "}
                <i className="fas fa-angle-left fa-2x"></i>{" "}
              </Link>
              <span className=" formtitle"> Forget Your Password ? </span>
              <div className="form-group mt-5">
                <strong className="mb-5">
                  Enter Your Email Adress And We Will
                  <br />
                  Send Your Password.
                </strong>
                <br />
                <br />
                <br />

                <label htmlFor="exampleInputEmail1">Username Or Email</label>
                <input
                  autoFocus
                  type="email"
                  className="form-control mb-5 mt-2 p-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="john@gmail.com"
                />
              </div>

              <div className="form-group text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-dark w-75 mx-auto submitbtn"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
