import { combineReducers } from "redux";
import { authTokenJWT } from "./authToken";
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
  AuthToken: authTokenJWT,
});

export default reducers;
