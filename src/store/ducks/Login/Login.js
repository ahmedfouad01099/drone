import { updateObject } from "../../../shared/utility";

const SET_RESPONSE_MESSAGE = "drone/Login/SET_RESPONSE_MESSAGE";
const SET_REDIRECT = "drone/Login/REDIRECT";
const LOGIN_SUCCESS = "drone/Login/LOGIN_SUCCESS";
const LOGOUT_HANDLER = "drone/Login/LOGOUT_HANDLER";

const initialState = {
  login_email: {
    value: "",
    valid: false,
    validation: {
      required: true,
    },
    validationError: "Required",
    touched: false,
  },

  login_password: {
    value: "",
    valid: false,
    validation: {
      required: true,
    },
    validationError: "Required",
    touched: false,
  },
  responseMessage: "",
  redirect: false,
  token: null,
};
// Action Creator
export const onPostRegister = (e, loginData) => {
  e.preventDefault();
  console.log(loginData);
  return (dispatch) => {
    const authData = {
      username: loginData.login_email.value,
      password: loginData.login_password.value,
    };
    fetch("http://securitycubes.com/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    })
      .then((res) => {
        console.log(res);
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("login failed!!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        if (resData.response) {
          dispatch(setResponseMessage(resData.response));
          localStorage.setItem("token", resData.token);
        } else {
          dispatch(setResponseMessage(resData.error));
        }
        return resData;
      })
      .then((result) => {
        console.log(result);
        if (result.response === "Sign-in successful") {
          setTimeout(() => {
            return dispatch(setRedirect(true));
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Action
export const setResponseMessage = (message) => {
  return {
    type: SET_RESPONSE_MESSAGE,
    message,
  };
};

const setResponseMessageOnState = (state, action) => {
  return updateObject(state, {
    responseMessage: action.message,
  });
};

///////////////////////////////////////////////////////////////////

// Action
export const setRedirect = (bool) => {
  return {
    type: SET_REDIRECT,
    bool,
  };
};

const setRedirectOnState = (state, action) => {
  return updateObject(state, {
    redirect: true,
  });
};
///////////////////////////////////////////////////////////////////

// Actions
export const loginSuccessAction = (token, login_email, login_password) => {
  return {
    type: LOGIN_SUCCESS,
    token: token,
    login_email: login_email,
    login_password: login_password,
  };
};

const loginSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    login_email: updateObject(state["login_email"], {
      value: action.login_email,
    }),
    login_password: updateObject(state["login_password"], {
      value: action.login_password,
    }),
  });
};
///////////////////////////////////////////////////////////////////
// Action
export const logoutHandlerAction = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT_HANDLER,
  };
};

const logoutHandler = (state, action) => {
  return updateObject(state, {
    token: null,
  });
};

// Action without no reducer function it just being dispatched
export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logoutHandlerAction());
    } else {
      dispatch(loginSuccessAction(token));
    }
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESPONSE_MESSAGE:
      return setResponseMessageOnState(state, action);
    case SET_REDIRECT:
      return setRedirectOnState(state, action);
    case LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case LOGOUT_HANDLER:
      return logoutHandler(state, action);
    default:
      return state;
  }
};

export default reducer;
