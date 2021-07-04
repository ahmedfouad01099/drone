import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { checkValidity, updateObject } from "../../shared/utility";
import RegisterAlertModal from "../../Components/AlertModal/RegisterAlertModal";

function ContactUs() {
  const [validationForm, setValidationForm] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const [contactUs, setcontactUs] = useState({
    name: {
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

    message: {
      value: "",
      validation: {
        required: true,
        minLength: 8,
      },
      valid: false,
      touched: false,
      validationError: "Required. Must be more than 8 chars",
    },
  });

  const contactUsHandler = (e, inputIdentifier) => {
    const updatedcontactUs = updateObject(contactUs, {
      [inputIdentifier]: updateObject(contactUs[inputIdentifier], {
        value: e.target.value,
        valid: checkValidity(
          e.target.value,
          contactUs[inputIdentifier].validation
        ),
        touched: true,
      }),
    });

    console.log(updatedcontactUs);
    let formIsValid =
      updatedcontactUs["name"].valid &&
      updatedcontactUs["email"].valid &&
      updatedcontactUs["message"].valid;

    console.log(formIsValid);
    setcontactUs(updatedcontactUs);
    setValidationForm(formIsValid);
  };

  const postContactData = useCallback((e, contactusData) => {
    console.log(contactusData.email.value.split("@")[0]);
    e.preventDefault();
    console.log(contactusData);
    const userData = {
      FullName: contactusData.name.value,
      email: contactusData.email.value,
      message: contactusData.message.value,
    };

    fetch("http://securitycubes.com/api/contactUs/", {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="contactbody">
        <div className="container">
          <div className="row">
            <RegisterAlertModal
              closeModal={() => setRegisterModalOpen(false)}
              modalIsOpen={registerModalOpen}
              message={responseMessage}
            />

            <div className="col-md-9">
              <form
                onSubmit={(e) => postContactData(e, contactUs)}
                className="loginform rofont p-5"
              >
                <Link className="mr-3 lognavlink" to="/">
                  {" "}
                  <i className="fas fa-angle-left fa-2x"></i>{" "}
                </Link>
                <span style={{ color: "#000" }} className=" formtitle">
                  {" "}
                  contact us!
                </span>
                <div className="form-group mt-4">
                  <label style={{ color: "#000" }}>Name *</label>
                  <input
                    onChange={(e) => contactUsHandler(e, "name")}
                    autoFocus
                    type="text"
                    className="form-control  p-2"
                  />
                  {contactUs.name.touched && contactUs.name.valid === false ? (
                    <p style={{ color: "red" }}>
                      {contactUs.name.validationError}
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label style={{ color: "#000" }}>Email *</label>
                  <input
                    onChange={(e) => contactUsHandler(e, "email")}
                    type="email"
                    className="form-control"
                  />
                  {contactUs.email.touched &&
                  contactUs.email.valid === false ? (
                    <p style={{ color: "red" }}>
                      {contactUs.email.validationError}
                    </p>
                  ) : null}
                </div>

                <div className="form-group">
                  <label style={{ color: "#000" }}>Message *</label>
                  <textarea
                    className="form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    onChange={(e) => contactUsHandler(e, "message")}
                  ></textarea>
                  {contactUs.message.touched &&
                  contactUs.message.valid === false ? (
                    <p style={{ color: "red" }}>
                      {contactUs.message.validationError}
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
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
