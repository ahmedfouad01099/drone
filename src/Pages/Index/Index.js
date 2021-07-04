import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Components/IndexComponent/Navbar/Navbar";
import IndexHeader from "../../Components/IndexComponent/IndexHeader/IndexHeader";
import IndexMiddle from "../../Components/IndexComponent/IndexMiddle/IndexMiddle";

function Index() {
  console.log("index");
  const isAuth = useSelector((state) => state.LoginReducer.token);

  return (
    <>
      {isAuth ? <Navbar /> : null}
      <Navbar />
      <IndexHeader />
      <IndexMiddle />
    </>
  );
}

export default Index;
