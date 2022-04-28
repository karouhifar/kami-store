import { ActionTypes } from "../constants/action-types";
import jwtDecode from "jwt-decode";
const initialState = {
  token: localStorage.getItem("token"),
  userData: {},
};

export const authTokenJWT = (state = initialState, action) => {
  // const tokenDecodedData = jwtDecode(action.payload);
  switch (action.type) {
    case ActionTypes.LOGIN_TOKEN:
      return {
        ...state,
        token: action.payload?.token,
        // userData: tokenDecodedData,
      };
    case ActionTypes.SIGN_OUT_TOKEN:
      state.token = null;
      state.userData = {};
      return { ...state };
    default:
      return state;
  }
};
