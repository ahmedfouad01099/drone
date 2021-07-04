import React, { useCallback, useState } from "react";
import AddDetils from "../../Components/ConfirmComponent/AddDetils";
import ConfirmMap from "../../Components/ConfirmComponent/ConfirmMap";

function ConfirmPosition() {

  return (
    <div className="container-fluid">
      <div className="row">
        <AddDetils />
        <ConfirmMap />
      </div>
    </div>
  );
}

export default ConfirmPosition;
