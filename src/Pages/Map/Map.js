import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "../../Components/Map/MapComponent";

function Map() {

  return (
    <div>
      <MapComponent />

      <div className="">
        <div className="container">
          <div className="searchloc">
            <form action="">
              <div className="row">
                <div className="col-md-5">
                  <input
                    type="search"
                    className="roundedform w-100 p-2"
                    placeholder="Your Location"
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="search"
                    className="roundedform w-100 p-2"
                    placeholder="Your Countery"
                    defaultValue="Mansoura , Egypt"
                  />
                </div>
                <div className="col-md-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="fa fa-search fa-2x"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Link
        style={{ display: "flex", alignItems: "center" }}
        to="/confirm"
        className="btn btn-primary mapsubmit"
      >
        <i className="fas fa-paper-plane fa-3x"></i> Confirm
      </Link>
    </div>
  );
}

export default Map;
