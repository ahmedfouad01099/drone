import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Index from "./Pages/Index/Index";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Order from "./Pages/Order/Order";
import Application from "./Pages/Application/Application";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Emergency from "./Pages/Emergency/Emergency";
import Technology from "./Pages/Technology/Technology";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Map from "./Pages/Map/Map";
import AddDetils from "./Components/ConfirmComponent/AddDetils";
import ConfirmPosition from "./Pages/ConfirmPosition/ConfirmPosition";
import { authCheckState } from "./store/ducks/Login/Login";
import ErrorHandling from "./Pages/ErrorHandling/ErrorHandling";
import Navbar from "./Components/IndexComponent/Navbar/Navbar";
import Pricing from "./Pages/Pricing/Pricing";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.LoginReducer.token);

  useEffect(() => {
    dispatch(authCheckState());
  }, [authCheckState]);
  console.log("app.js");
  let routes = (
    <>
      {/* <ScrollToTop /> */}

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/application" component={Application} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/emergency" component={Emergency} />
        <Route path="/technology" component={Technology} />
        <Route path="/forgetpass" component={ForgetPassword} />
        <Route path="/map" component={Map} />
        <Route
          path="/confirm"
          render={(props) => <ConfirmPosition {...props} isAuth={isAuth} />}
        />
        <Route path="/pricing" component={Pricing} />
        {isAuth ? (
          <Route path="/order" render={(props) => <Order {...props} />} />
        ) : (
          <ErrorHandling
            errorMessage="please login to reach this page"
            routeTo={"login"}
          />
        )}
      </Switch>
      <Footer />
    </>
  );

  return <React.Fragment>{routes}</React.Fragment>;
}

export default App;
