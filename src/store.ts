import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import notificationReducer from "./reducers/notification";
import storageUtils from "./utils/localStorage";
import blogReducer from "./reducers/blog";
import userReducer from "./reducers/user";

function configureStore() {
  const reducer = combineReducers({
    user: authReducer,
    notification: notificationReducer,
    blogs: blogReducer,
    users: userReducer,
  });

  const store = createStore(reducer, applyMiddleware(thunk));

  store.subscribe(() => {
    const user = store.getState().user;
    if (user === null) {
      storageUtils.removeUser();
    } else {
      storageUtils.saveUser(store.getState().user);
    }
  });

  return store;
}

const store = configureStore();
export default store;
