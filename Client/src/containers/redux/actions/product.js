import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

export const filteredProducts = (productString) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS,
    payload: productString,
  };
};

export const setCategory = (category) => {
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: category,
  };
};

export const getCategoryID = (categoryID) => {
  return {
    type: ActionTypes.GET_CATEGORY_ID,
    payload: categoryID,
  };
};
