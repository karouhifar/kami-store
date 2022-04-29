import { ActionTypes } from "../constants/action-types";
import jwtDecode from "jwt-decode";
const initialState = {
  token: localStorage.getItem("token"),
  userData: {},
};

export const authTokenJWT = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_TOKEN:
    case ActionTypes.USER_LOADED:
      const { token } = action?.payload;

      const tokenDecodedData = jwtDecode(token);
      tokenDecodedData.unique_name =
        tokenDecodedData?.unique_name.split("@")[0];
      return {
        ...state,
        userData: tokenDecodedData,
      };
    case ActionTypes.SIGN_OUT_TOKEN:
      state.token = null;
      state.userData = {};
      return { ...state };
    default:
      return state;
  }
};
