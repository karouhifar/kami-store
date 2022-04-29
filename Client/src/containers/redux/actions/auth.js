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

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState()?.AuthToken;
    if (getState()?.AuthToken.token) {
      dispatch({
        type: ActionTypes.USER_LOADED,
        payload: token,
      });
    } else return null;
  };
};
