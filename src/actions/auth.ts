import { Dispatch } from "react-dom/node_modules/@types/react";
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
  (username: string, password: string) => async (dispatch: Dispatch<any>) => {
    try {
      const loggedUser = await authService.login({ username, password });
      dispatch(doLogin(loggedUser));
      dispatch(startSetNotification("success", "Login successfully"));
    } catch (err) {
      console.log(err);
      dispatch(startSetNotification("error", "Fail to login"));
    }
  };
