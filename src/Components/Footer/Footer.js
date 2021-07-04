import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="rofont">
      <div className="line w-75 mx-auto ">
        <img src="images/line.png" className="lineimg img-fluid pt-5" alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 pl-5 mt-5">
            <a className="foot-link activeLink" href="index.html">
              HOME{" "}
            </a>

            <a className="foot-link" href="order.html">
              ORDER
            </a>

            <a className="foot-link" href="techonlogy.html">
              TECHNOLOGY
            </a>

            <a className="foot-link" href="application.html">
              APPLICATION
            </a>

            <a className="foot-link" href="contactus.html">
              CONTACT US
            </a>
          </div>
          <div className="col-md-6  mt-5 text-right pr-5">
            <div className="social">
              <Link className="social-link" to="/">
                <i className="fab fa-twitter fa-2x"></i>
              </Link>
              <Link className="social-link" to="/">
                <i className="fab fa-facebook fa-2x"></i>
              </Link>
              <Link className="social-link" to="/">
                <i className="fab fa-youtube fa-2x"></i>
              </Link>
              <Link className="social-link" to="/">
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
            </div>

            <div className="mt-3">
              <small>
                Copyright © 2021 Drone Delivery
                <br />
                All Rights Reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
