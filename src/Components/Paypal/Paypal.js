import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

function Paypal(props) {
  const paypal = useRef();

  const { token, Id } = props;
  console.log(Id);

  useEffect(() => {
    window.myButton = window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        const createId = {
          id: Id,
        };

        return fetch("http://securitycubes.com/api/CreatePayment/", {
          method: "POST",
          headers: {
            Authorization: "Token " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createId),
        })
          .then((res) => {
            console.log(res);
            if (res.status !== 200) {
              throw new Error("Failed to fetch createOrder");
            }
            return res.json();
          })
          .then((resData) => {
            console.log(resData);
            return resData.id;
          });
      },
      onApprove: (data, actions) => {
        console.log(data);
        const captureId = {
          order_id: data.orderID,
        };
        return fetch("http://securitycubes.com/api/CapturePayment/", {
          method: "POST",
          headers: {
            Authorization: "Token " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(captureId),
        })
          .then((res) => {
            console.log(res);
            if (res.status !== 200) {
              throw new Error("Failed to fetch onApprove");
            }
            return res.json();
          })
          .then((resData) => {
            console.log(resData);
          });
      },
      onError: (err) => {
        console.log(err);
      },
    });
    window.myButton.render(paypal.current);
  }, [token, Id]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.LoginReducer.token,
  };
};

export default connect(mapStateToProps)(Paypal);
