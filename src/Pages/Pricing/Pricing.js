import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";

import Paypal from "../../Components/Paypal/Paypal";
import classes from "./Pricing.module.css";
import { Link } from "react-router-dom";

function BodyPage(props) {
  const { token } = props;
  const [plans, setPlans] = useState();
  let [loading, setLoading] = useState(true);
  const [checkout, setCheckout] = useState(false);
  const [checkout1, setCheckout1] = useState(false);
  const [checkout2, setCheckout2] = useState(false);

  useEffect(() => {
    const loadPlans = () => {
      fetch("http://securitycubes.com/api/plans/", {
        headers: {
          Authorization: "Token " + token ? token : null,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status !== 200) {
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((resData) => {
          console.log(resData);
          setPlans(resData.plans);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    loadPlans();
  }, [token]);

  return (
    <div style={{ height: "100%" }}>
      <div className={classes.body}>
        <div className={classes.Container}>
          <div style={{ width: "100%" }}>
            <h1 style={{ margin: "0" }}>Pricing</h1>
            <p>
              Here you can compete with other hacker in online MMORPG. you can
              accesss it through our hacker portal
            </p>
            <div
              className={classes.rowMobile + " row"}
              style={{
                margin: "auto",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {plans &&
                plans.map((plan) => {
                  return (
                    <div key={plan.id} className={"col-3 " + classes.plan1}>
                      <h3>{plan.PlanName}</h3>
                      <h1 style={{ margin: "0" }}>$ {plan.Pricing}</h1>
                      <p className={classes.para}>Per month</p>
                      <div>
                        {plan.Features.map((feature) => {
                          return <p key={Math.random()}>{feature}</p>;
                        })}
                      </div>
                      <div style={{ padding: "30px 0" }}>
                        {plan.id === 1 ? (
                          checkout ? (
                            <>
                              {console.log(plan.Pricing)}
                              <Paypal Id={plan.id} value={plan.Pricing} />
                            </>
                          ) : (
                            <>
                              {token ? (
                                <button
                                  className={classes.button}
                                  onClick={() => {
                                    setCheckout(true);
                                  }}
                                >
                                  Join now
                                </button>
                              ) : (
                                <Link
                                  to="/register"
                                  style={{ textDecoration: "none" }}
                                  className={classes.button}
                                >
                                  Register now
                                </Link>
                              )}
                            </>
                          )
                        ) : null}

                        {plan.id === 2 ? (
                          checkout1 ? (
                            <>
                              {console.log(plan.Pricing)}
                              <Paypal Id={plan.id} value={plan.Pricing} />
                            </>
                          ) : (
                            <>
                              {token ? (
                                <button
                                  className={classes.button}
                                  onClick={() => setCheckout1(true)}
                                >
                                  Join now
                                </button>
                              ) : (
                                <Link
                                  to="/register"
                                  style={{ textDecoration: "none" }}
                                  className={classes.button}
                                >
                                  Register now
                                </Link>
                              )}
                            </>
                          )
                        ) : null}

                        {plan.id === 3 ? (
                          checkout2 ? (
                            <>
                              {console.log(plan.Pricing)}
                              <Paypal Id={plan.id} value={plan.Pricing} />
                            </>
                          ) : (
                            <>
                              {token ? (
                                <button
                                  className={classes.button}
                                  onClick={() => setCheckout2(true)}
                                >
                                  Join now
                                </button>
                              ) : (
                                <Link
                                  to="/register"
                                  style={{ textDecoration: "none" }}
                                  className={classes.button}
                                >
                                  Register now
                                </Link>
                              )}
                            </>
                          )
                        ) : null}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.LoginReducer.token,
  };
};

export default connect(mapStateToProps)(BodyPage);
