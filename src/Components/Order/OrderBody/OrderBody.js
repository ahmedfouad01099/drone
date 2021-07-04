import React from "react";
import { Link } from "react-router-dom";

function OrderBody() {
  return (
    <div>
      <div className="orderbody">
        <div className="container">
          <form action="" className="w-75 mx-auto pt-5">
            <input
              type="search"
              className="form-control roundedform"
              name=""
              id=""
              placeholder="SEARCH .... "
            />
          </form>

          <div className="text-center mt-5 mb-5">
            <h4>
              The Future Of Logistics Is In Safe Hands Thanks To The <br />
              Innovative Concept Of Drone Delivery.
            </h4>
          </div>

          <div className="container w-75 mx-auto">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <img
                    src="images/drones-deliver-covid-19-vaccin.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="text-center pt-2">
                  <Link to="/confirm" className="btn btn-outline-dark my-sm-0">
                    <strong> COVID-19</strong> <br />{" "}
                    <small>(Vaccine,Test,Medicines,other)</small>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center mb-5">
                  <i className="fas fa-angle-left fa-2x mr-2"></i>{" "}
                  <span className="orderspan">Order now</span>{" "}
                  <i className="fas fa-angle-right fa-2x ml-2"></i> <br />
                  <i className="fas fa-angle-down fa-2x mt-2"></i>
                </div>
                <div>
                  <img
                    src="images/jason-blackeye-307736.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="text-center pt-2">
                  <Link to="/confirm" className="btn btn-outline-dark my-sm-0">
                    <strong>Others Services</strong>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img
                    src="images/ID240_F_105082900_7CsW8ZwcVZcA.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="text-center pt-2">
                  <Link to="/confirm" className="btn btn-outline-dark my-sm-0">
                    <strong> Ambulance</strong> <br />{" "}
                    <small>(First Aid , Other Medical Services)</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderBody;
