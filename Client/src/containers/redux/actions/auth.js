import { ActionTypes } from "../constants/action-types";

export const setToken = (token) => {
  return {
    type: ActionTypes.LOGIN_TOKEN,
    payload: token,
  };
};

export const deleteToken = () => {
  return {
    type: ActionTypes.SIGN_OUT_TOKEN,
  };
};
