import React from "react";

function TechnologyBody() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 techleft">
          <div className="technologycontent  w-75 mx-auto">
            <h2 className="maincolor ">DESIGN </h2>
            <br />
            <p>
              {" "}
              M Drone Delivery provides a proprietary software system,
              professional equipment and services, allowing for a safe and
              independent delivery of shipments from warehouse to warehouse.
            </p>

            <br />
            <br />
            <br />
            <br />
            <br />

            <p>
              {" "}
              M Drone Delivery policy enables aviation safety assurance and
              regulatory compliance - this includes the use of risk assessments,
              a safety management system,
            </p>
          </div>
        </div>

        <div className="col-md-6 techright">
          <div className="technologycontent  w-75 mx-auto">
            <h2 className="maincolor ">THE WEATHER CHANNEL </h2>
            <br />
            <br />
            <p>
              {" "}
              Flight management software that allows for safe independent
              operations, air traffic and weather control, and other sensor
              data. This data is presented to the operators in the process
              control center. Our business model entails flights from warehouse
              to warehouse on pre-defined routes required. Drones operate
              autonomously while our software monitors air traffic, weather,
              obstacles, and other elements along the way. Safety is at the
              forefront of all operations, and all flights are supervised from
              Control Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyBody;
