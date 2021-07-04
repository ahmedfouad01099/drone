import React from "react";
import EmergencyHelpNeeded from "../../Components/Emergency/EmergencyHelpNeeded/EmergencyHelpNeeded";
import EmergencyCase from "../../Components/Emergency/EmergencyCase/EmergencyCase";

function Emergency() {
  return (
    <div className="container-fluid">
      <div className="row">
        <EmergencyHelpNeeded />
        <EmergencyCase />
      </div>
    </div>
  );
}

export default Emergency;
