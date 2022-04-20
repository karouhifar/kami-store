import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  setFilterProducts,
  setCategoryReducer,
  getCategoryID,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  OneProduct: selectedProductReducer,
  filterProduct: setFilterProducts,
  category: setCategoryReducer,
  categoryID: getCategoryID,
});

export default reducers;
