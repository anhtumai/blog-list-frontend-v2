import { Dispatch } from "react-dom/node_modules/@types/react";
import authService from "../services/auth";

export const doLogin = (user: IUserWithToken) => ({
  type: "LOGIN",
  data: user,
});

export const startLogin =
  (username: string, password: string) => async (dispatch: Dispatch<any>) => {
    try {
      const loggedUser = await authService.login({ username, password });
      console.log(loggedUser);
      dispatch(doLogin(loggedUser));
    } catch (err) {
      console.log(err);
    }
  };
