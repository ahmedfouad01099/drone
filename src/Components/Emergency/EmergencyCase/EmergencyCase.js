import React from "react";

function EmergencyCase() {
  return (
    <div className="col-md-6 homeright">
      <form action="" className="appdetailform rofont p-5">
        <span className=" formtitle"> Emergency case </span>
        <div className="form-group mt-4">
          <label>Your ID *</label>

          <input type="text" className="form-control" placeholder="........." />
        </div>
        <div className="form-group">
          <label> Card Number *</label>
          <input
            type="text"
            className="form-control"
            placeholder="+201010205060"
          />
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mt-3">
                <label> Expire date *</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="+201010205060"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mt-3">
                <label> CVV *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="+201010205060"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Emergency Contact Number *</label>
          <input
            type="text"
            className="form-control"
            placeholder="+201010205060"
          />
        </div>
        <div className="form-group">
          <label>Blood Type *</label>
          <br />
          <input
            type="radio"
            className="btn-check "
            name="blood"
            id="option3"
            autoComplete="off"
            defaultChecked
          />
          <label className="btn btn-danger mr-3" htmlFor="option3">
            A
          </label>

          <input
            type="radio"
            className="btn-check "
            name="blood"
            id="option4"
            autoComplete="off"
          />
          <label className="btn btn-danger mr-3" htmlFor="option4">
            B
          </label>

          <input
            type="radio"
            className="btn-check "
            name="blood"
            id="option5"
            autoComplete="off"
          />
          <label className="btn btn-danger mr-3" htmlFor="option5">
            AB
          </label>

          <input
            type="radio"
            className="btn-check "
            name="blood"
            id="option6"
            autoComplete="off"
          />
          <label className="btn btn-danger mr-3" htmlFor="option6">
            O
          </label>
        </div>

        <div className="form-group w-75 mx-auto">
          <br />
          <input
            type="radio"
            className="btn-check "
            name="st"
            id="option7"
            autoComplete="off"
            defaultChecked
          />
          <label className="btn btn-danger p-3 " htmlFor="option7">
            {" "}
            +{" "}
          </label>

          <input
            type="radio"
            className="btn-check  "
            name="st"
            id="option8"
            autoComplete="off"
          />
          <label className="btn btn-danger  p-3 " htmlFor="option8">
            {" "}
            -{" "}
          </label>
        </div>
      </form>
    </div>
  );
}

export default EmergencyCase;
