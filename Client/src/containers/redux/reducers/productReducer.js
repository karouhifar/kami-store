import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, OneProduct: action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

export const setFilterProducts = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FILTER_PRODUCTS:
      return { ...state, filterProduct: action.payload };
    default:
      return state;
  }
};

export const setCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export const getCategoryID = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORY_ID:
      return { ...action.payload };
    default:
      return state;
  }
};
