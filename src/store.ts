import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";

const reducer = combineReducers({
  user: authReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
