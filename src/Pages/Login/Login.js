import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { checkValidity, updateObject } from "../../shared/utility";
import LoginAlert from "../../Components/AlertModal/LoginAlert";
import { onPostRegister } from "../../store/ducks/Login/Login";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const loginFormState = useSelector((state) => state.LoginReducer);
  console.log(loginFormState);
  const [loginForm, setLoginForm] = useState(loginFormState);

  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const responseMessage = useSelector(
    (state) => state.LoginReducer.responseMessage
  );
  const redirect = useSelector((state) => state.LoginReducer.redirect);

  const loginHandler = (e, inputIdentifier) => {
    const updatedLoginForm = updateObject(loginForm, {
      [inputIdentifier]: updateObject(loginForm[inputIdentifier], {
        value: e.target.value,
        valid: checkValidity(
          e.target.value,
          loginForm[inputIdentifier].validation
        ),
        touched: true,
      }),
    });

    console.log(updatedLoginForm);
    setLoginForm(updatedLoginForm);
  };
  if (redirect) {
    window.location.href = "http://securitycubes.com/order";
  }
  return (
    <div className="logbody">
      <div className="container">
        <div className="row">
          <LoginAlert
            closeModal={() => setRegisterModalOpen(false)}
            modalIsOpen={registerModalOpen}
            message={responseMessage}
          />
          <div className="col-md-6">
            <form
              onSubmit={(e) => dispatch(onPostRegister(e, loginForm))}
              className="loginform rofont p-5"
            >
              <Link className="mr-3 lognavlink" to="/">
                {" "}
                <i className="fas fa-angle-left fa-2x"></i>{" "}
              </Link>
              <span className=" formtitle"> Login To Your Account!</span>
              <div className="form-group mt-5">
                <label htmlFor="exampleInputEmail1">Username Or Email</label>
                <input
                  autoFocus
                  type="email"
                  className="form-control mb-5 mt-2 p-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="john@gmail.com"
                  onChange={(e) => loginHandler(e, "login_email")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="*********"
                  onChange={(e) => loginHandler(e, "login_password")}
                />
              </div>

              <div className="form-group text-center mt-4">
                <button
                  onClick={() => setRegisterModalOpen(true)}
                  type="submit"
                  className="btn btn-dark w-75 mx-auto submitbtn"
                >
                  Submit
                </button>
              </div>

              <div className="form-group text-right">
                <Link className="loglink" to="/forgetpass">
                  forget password?
                </Link>
              </div>

              <div className="form-group text-center mt-5">
                <Link className="loglink" to="/forgetpass">
                  Do you have an account ?{" "}
                </Link>
                <Link className="loglink" to="/register">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
