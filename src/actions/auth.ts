import { Dispatch } from "react-dom/node_modules/@types/react";
import authService from "../services/auth";

export const doLogin = (username: string, token: string) => ({
  type: "LOGIN",
  data: {
    username,
    token,
  },
});

export const performLogin =
  (username: string, password: string) => async (dispatch: Dispatch<any>) => {
    try {
      const loggedUser = await authService.login({ username, password });
      console.log(loggedUser);
    } catch (err) {
      console.log(err);
    }
  };
