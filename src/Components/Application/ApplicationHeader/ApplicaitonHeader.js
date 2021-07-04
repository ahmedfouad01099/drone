import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ApplicaitonHeader() {
  const isAuth = useSelector((state) => state.LoginReducer.token);
  return (
    <header
      className="container-fluid"
      style={{
        backgroundImage: "url('images/Dron.png')",
        backgroundPosition: "center center",
      }}
    >
      <div className="g-transparent applicationheadercontent ">
        <h1 style={{ fontWeight: "bold", color: "white" }}>
          Medical Drone Delivery Application
        </h1>
        <br />

        <p style={{ fontWeight: "700", color: "white" }}>
          The use of drones is possible to deliver life-saving medical supplies
          in harsh environments.reduced lead times <br />
          and costs, quickly becoming a vital tool to advance their delivery
          models and improve efficiency.
        </p>
        <br />

        {isAuth ? null : (
          <Link
            to="register"
            className="btn btn-primary my-2 my-sm-0 mr-3 mainbg "
            style={{ borderRadius: "25px", padding: "15px 30px" }}
          >
            Sign up
          </Link>
        )}
      </div>
    </header>
  );
}

export default ApplicaitonHeader;
