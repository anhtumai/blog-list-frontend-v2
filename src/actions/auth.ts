import { Dispatch } from "react-dom/node_modules/@types/react";
import { History } from "history";

import authService from "../services/auth";
import { startSetNotification } from "./notification";

export const doLogin = (user: IUserWithToken) => ({
  type: "LOGIN",
  data: user,
});

export const doLogout = () => ({
  type: "LOGOUT",
});

export const startLogin =
  (username: string, password: string, history: History) =>
  async (dispatch: Dispatch<any>) => {
    try {
      const loggedUser = await authService.login({ username, password });
      dispatch(doLogin(loggedUser));
      history.push("/");
      dispatch(startSetNotification("success", "Login successfully"));
    } catch (err) {
      console.log(err);
      const errorMessage =
        err.response.status === 401 ? "Wrong credentials" : "Fail to login";
      dispatch(startSetNotification("error", errorMessage));
    }
  };
