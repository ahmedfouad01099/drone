import React, { useCallback, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { checkValidity, updateObject } from "../../shared/utility";
import RegisterAlertModal from "../../Components/AlertModal/RegisterAlertModal";

function Register() {
  const [validationForm, setValidationForm] = useState(false);

  const [registerForm, setRegisterForm] = useState({
    firstname: {
      value: "",
      validation: {
        required: true,
        minLength: 3,
      },
      valid: false,
      touched: false,
      validationError: "Required must be more than 2 letters",
    },

    lastname: {
      value: "",
      validation: {
        required: true,
        minLength: 3,
      },
      valid: false,
      touched: false,
      validationError: "Required must be more than 2 letters",
    },

    email: {
      value: "",
      validation: {
        required: true,
        containAtsignandDot: "contain@&.",
      },
      valid: false,
      touched: false,
      validationError: "Required. Must be a valid email",
    },

    password: {
      value: "",
      validation: {
        required: true,
        minLength: 8,
        containSpecialChars: true,
      },
      valid: false,
      touched: false,
      validationError:
        "Required and must be at least 8 charachters and contains alphabets, numbers and spchial characters like [#, $, % and so on]",
    },
  });
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const registerHandler = (e, inputIdentifier) => {
    const updatedRegisterForm = updateObject(registerForm, {
      [inputIdentifier]: updateObject(registerForm[inputIdentifier], {
        value: e.target.value,
        valid: checkValidity(
          e.target.value,
          registerForm[inputIdentifier].validation
        ),
        touched: true,
      }),
    });

    let formIsValid =
      updatedRegisterForm["firstname"].valid &&
      updatedRegisterForm["lastname"].valid &&
      updatedRegisterForm["email"].valid &&
      updatedRegisterForm["password"].valid;
    setRegisterForm(updatedRegisterForm);
    setValidationForm(formIsValid);
  };

  const postRegisterData = useCallback((e, registerData) => {
    console.log(registerData.email.value.split("@")[0]);
    e.preventDefault();
    console.log(registerData);
    const userData = {
      username: registerData.email.value.split("@")[0],
      email: registerData.email.value,
      password: registerData.password.value,
      first_name: registerData.firstname.value,
      last_name: registerData.lastname.value,
    };

    fetch("http://securitycubes.com/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 422) {
          throw new Error("validation falied");
        }
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("failed to create account!!");
        }
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((resData) => {
        console.log(resData);
        if (resData.response) {
          setResponseMessage(resData.response);
        } else {
          setResponseMessage(resData.error);
        }
        return resData;
      })
      .then((result) => {
        console.log(result);
        if (result.response === "Sign-Up Sussefuly") {
          setTimeout(() => {
            return setRedirect(true);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="logbody">
      <div className="container">
        <div className="row">
          <RegisterAlertModal
            closeModal={() => setRegisterModalOpen(false)}
            modalIsOpen={registerModalOpen}
            message={responseMessage}
          />

          {redirect ? <Redirect to="/login" /> : null}

          <div className="col-md-6">
            <form
              onSubmit={(e) => postRegisterData(e, registerForm)}
              className="loginform rofont p-5"
            >
              <Link className="mr-3 lognavlink" to="/">
                {" "}
                <i className="fas fa-angle-left fa-2x"></i>{" "}
              </Link>
              <span className=" formtitle"> Welcome!</span>
              <div className="form-group mt-4">
                <label htmlFor="firstname"> First Name</label>
                <input
                  autoFocus
                  type="text"
                  className="form-control mb-2 mt-2 p-2"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="john@gmail.com"
                  onChange={(e) => registerHandler(e, "firstname")}
                />
                {registerForm.firstname.touched &&
                registerForm.firstname.valid === false ? (
                  <p style={{ color: "red" }}>
                    {registerForm.firstname.validationError}
                  </p>
                ) : null}
              </div>
              <div className="form-group ">
                <label htmlFor="lastname"> Last Name</label>
                <input
                  autoFocus
                  type="text"
                  className="form-control mb-2  p-2"
                  id="lastname"
                  aria-describedby="emailHelp"
                  placeholder="john@gmail.com"
                  onChange={(e) => registerHandler(e, "lastname")}
                />
                {registerForm.lastname.touched &&
                registerForm.lastname.valid === false ? (
                  <p style={{ color: "red" }}>
                    {registerForm.lastname.validationError}
                  </p>
                ) : null}
              </div>
              <div className="form-group ">
                <label htmlFor="exampleInputEmail1"> Email</label>
                <input
                  autoFocus
                  type="email"
                  className="form-control mb-2 p-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="john@gmail.com"
                  onChange={(e) => registerHandler(e, "email")}
                />
                {registerForm.email.touched &&
                registerForm.email.valid === false ? (
                  <p style={{ color: "red" }}>
                    {registerForm.email.validationError}
                  </p>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="*********"
                  onChange={(e) => registerHandler(e, "password")}
                />
                {registerForm.password.touched &&
                registerForm.password.valid === false ? (
                  <p style={{ color: "red" }}>
                    {registerForm.password.validationError}
                  </p>
                ) : null}
              </div>

              <div className="form-group text-center mt-4">
                <button
                  onClick={() => setRegisterModalOpen(true)}
                  type="submit"
                  className="btn btn-dark w-75 mx-auto submitbtn"
                  disabled={!validationForm}
                  style={
                    !validationForm
                      ? {
                          backgroundColor: "#ccc",
                          border: "none",
                          cursor: "not-allowed",
                        }
                      : null
                  }
                >
                  Next
                </button>
              </div>

              <div className="form-group text-center mt-5">
                <Link className="loglink" to="/login">
                  Do you have an account ?{" "}
                </Link>
                <Link className="loglink" to="/login">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
