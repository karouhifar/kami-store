import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/index";

const composedEnhancer = compose(applyMiddleware(thunk));

const store = createStore(reducers, composedEnhancer);

export default store;
