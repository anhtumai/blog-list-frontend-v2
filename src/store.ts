import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import notificationReducer from "./reducers/notification";
import storageUtils from "./utils/localStorage";

function configureStore() {
  const reducer = combineReducers({
    user: authReducer,
    notification: notificationReducer,
  });

  const store = createStore(reducer, applyMiddleware(thunk));

  store.subscribe(() => {
    storageUtils.saveUser(store.getState().user);
  });

  return store;
}

const store = configureStore();
export default store;
