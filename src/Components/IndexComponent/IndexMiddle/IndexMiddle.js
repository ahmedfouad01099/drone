import React from "react";
import { Link } from "react-router-dom";

function IndexMiddle() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 homeleft">
            <div className="technologycontent  w-75 mx-auto">
              <h2 className=" ">Drone Delivery Applications </h2>
              <br />
              <p style={{ color: "white", fontSize: "14px" }}>
                {" "}
                we focus on customizing, deploying, and operating commercially
                viable drone delivery systems in global markets. This disruptive
                technology has been enabling commercial customers with access to
                new markets, reduced lead times and costs, and remote
                communities with more sophisticated supply chains, quickly
                becoming a vital tool to advance their delivery models and
                improve efficiency.
              </p>
              

              <Link
                to="/watchvideo"
                className="btn btn-outline-light my-2 mr-5 my-sm-0"
              >
                watch Video
              </Link>
            </div>
          </div>

          <div className="col-md-6 homeright">
            <div className="technologycontent  w-75 mx-auto">
              <h2 className=" ">About Us </h2>
            
              <p style={{ fontSize: "14px" }}>
                {" "}
                Our vision is to be the premier drone delivery company globally.
                Through our relentless focus on customers, employees and safety,
                we commercialize our technology to create new and innovative.
              </p>
            </div>

            <div className="technologycontent  w-75 mx-auto">
              <h2 style={{ color: "#CB0303" }}>KEY FACTS TO KNOW </h2>
              
              <p style={{ fontSize: "14px" }}>
                {" "}
                Drone delivery is a DISRUPTIVE TECHNOLOGY that is redefining the
                traditional industry. Drones offer a more cost-effective way to
                deliver cargo by MINIMIZING SHIPPING TIMES and REDUCING
                OPERATIONAL AND OVERHEAD COSTS, allowing businesses to grow
                their revenues and bottom lines. Regulatory bodies have
                developed a set of regulations to legislate commercial drone use
                that Drone Delivery .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexMiddle;
