import React from "react";
import OrderHeader from "../../Components/Order/OrderHeader/OrderHeader";
import OrderBody from "../../Components/Order/OrderBody/OrderBody";

function Order(props) {
  console.log(props.isAuth);

  return (
    <div>
      <OrderHeader />

      <OrderBody />
    </div>
  );
}

export default Order;
