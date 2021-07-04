import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function IndexHeader() {
  const isAuth = useSelector((state) => state.LoginReducer.token);
  return (
    <>
      {" "}
      <header className="container-fluid">
        <div className="g-transparent homeheadercontent ">
          <h1 className="maincolor " style={{ fontWeight: "900" }}>
            We Are Here for You Every <br />
            Moment.
          </h1>
          <br />
          <br />
          <p style={{ fontWeight: "700px" }}>
            Unmanned Aerial Vehicles are exellent way to <br />
            modernize the last mile in medical deliveries and <br />
            bridge gaps in access.
          </p>
          <br />
          <br />
          {isAuth ? null : (
            <Link
              to="/register"
              className="btn btn-primary my-2 my-sm-0 mr-3 mainbg "
              style={{ borderRadius: "25px", padding: "15px 30px" }}
            >
              Sign up
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export default IndexHeader;
