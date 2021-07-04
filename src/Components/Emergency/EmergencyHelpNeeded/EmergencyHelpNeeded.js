import React from "react";
import { Link } from "react-router-dom";

function EmergencyHelpNeeded() {
  return (
    <div className="col-md-6">
      <form action="" className="appdetailform rofont p-5">
        <Link className="mr-3 mb-5 lognavlink" to="/">
          {" "}
          <i className="fas fa-angle-left fa-2x"></i>{" "}
        </Link>
        <span className=" formtitle"> ُEmergency Help Needed </span>

        <p className="text-muted text-center mt-4">
          save lives with a network of drones
        </p>
        <p className="text-center mt-4">Just hold the button to call</p>
        <div className="text-center mt-5 mb-5">
          <img
            src="images/callto.png"
            className="img-fluid"
            width="100"
            alt=""
          />
        </div>

        <p className="text-center mt-4">
          Not sure what to do <br />
          <span className="text-muted" style={{ fontSize: "12px" }}>
            Pick the subject to chat
          </span>
        </p>

        <div className="form-group">
          <label>Blood Type *</label>
          <br />
          <label className="btn btn-light  text-center ml-2" htmlFor="option10">
            <small>
              I had an <br />
              accident <br />
            </small>
            <img src="images/fever_2.png" width="20" alt="" />
          </label>

          <label className="btn btn-light  text-center ml-2" htmlFor="option10">
            <small>
              I have an
              <br /> injury
              <br />
            </small>
            <img src="images/bleeding.png" width="20" alt="" />
          </label>

          <label className="btn btn-light  text-center ml-2" htmlFor="option10">
            <small>
              Infected <br />
              <br />
              <br />
              Covid-19 person
              <br />
            </small>
            <img src="images/fever_3.png" width="20" alt="" />
          </label>

          <label className="btn btn-light  text-center ml-2" htmlFor="option10">
            Others
            <br />
            <img src="images/businessman.png" width="20" alt="" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default EmergencyHelpNeeded;
