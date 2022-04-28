import { ActionTypes } from "../constants/action-types";

const initialState = {
  token: null,
  loading: false,
  userData: {},
};

export const authTokenJWT = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_TOKEN:
      const { accessToken, user } = action.payload;
      state.token = accessToken;
      state.userData = user;
      state.loading = false;
      return { ...state, TokenIn: action.payload };
    case ActionTypes.SIGN_OUT_TOKEN:
      state.token = null;
      state.userData = {};
      state.loading = false;
      return { ...state, TokenOut: action.payload };
    default:
      return state;
  }
};
