import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Geocode from "react-geocode";
import { useSelector } from "react-redux";

Geocode.setApiKey("AIzaSyD9qoPBmrBAk2T8TxWa4mttmKN-1_kz6aI");

function AddDetils(props) {
  const isAuth = useSelector((state) => state.LoginReducer.token);

  const [position, setPostion] = useState({
    lat: "48.8583701",
    long: "2.2922926",
  });

  const getLoaction = useCallback(
    (e) => {
      e.preventDefault();
      console.log(isAuth);
      navigator.geolocation.getCurrentPosition(function (position) {
        setPostion({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        localStorage.setItem("lat", position.coords.latitude);
        localStorage.setItem("long", position.coords.longitude);
      });

      isAuth &&
        fetch("http://securitycubes.com/api/requestOrder/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + isAuth,
          },
          body: JSON.stringify({
            position: {
              lat: localStorage.getItem("lat"),
              long: localStorage.getItem("long"),
            },
            TypeOfOrderId: 2,
          }),
        })
          .then((res) => {
            console.log(res);
            if (res.status !== 200) {
              throw new Error("Failed to detect your postion");
            }
            return res.json();
          })
          .then((resData) => {
            console.log(resData);
          });
    },
    [position.lat, position.long, isAuth]
  );

  return (
    <div className="col-md-6">
      <form action="" className="appdetailform rofont p-5">
        <Link className="mr-3 lognavlink" to="/">
          {" "}
          <i className="fas fa-angle-left fa-2x"></i>{" "}
        </Link>
        <span className=" formtitle"> Add Details </span>
        <h2 className="mt-4 mb-3">Where would you like to go ? *</h2>

        <div className="form-group ">
          <label>from *</label>

          <input
            type="text"
            className="form-control"
            placeholder={"lat:" + "48.8583701" + ", long:" + "2.2922926"}
          />
        </div>
        <div className="form-group ">
          <label>to *</label>

          <input
            type="text"
            className="form-control"
            placeholder={"lat:" + position.lat + ", long:" + position.long}
            onChange={getLoaction}
          />
          <button
            onClick={(e) => getLoaction(e)}
            className="btn btn-light p-3"
            style={{ marginTop: "7px" }}
          >
            Get Postion
          </button>
        </div>
        <div className="form-group">
          <label>Details *</label>
          <br />
          <label className="btn btn-light  text-center" htmlFor="option10">
            <img src="images/conf1.png" width="50" alt="" /> <br />
            Distance : 35 km.
          </label>
          <label className="btn btn-light  text-center" htmlFor="option10">
            <img src="images/conf2.png" width="50" alt="" /> <br />
            Duration : 15 min.
          </label>
          <label className="btn btn-light  text-center" htmlFor="option10">
            <img src="images/conf3.png" width="50" alt="" /> <br />
            Cost : 1000 EP.
          </label>
        </div>

        <div className="form-group text-center mt-4">
          <Link to="/order" className="btn btn-light p-3 mr-2">
            cancel
          </Link>
          <Link to="/pricing" className="btn btn-light p-3">
            pricing
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddDetils;
