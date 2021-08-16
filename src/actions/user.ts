import { Dispatch } from "react";
import { History } from "history";

import userService from "../services/user";
import { startSetNotification } from "./notification";

export const startInitUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    const users = await userService.getAll();
    dispatch({
      type: "INIT_USERS",
      data: users,
    });
  };
};

export const startCreateUser = (
  name: string,
  username: string,
  password: string,
  history: History,
) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const newUser: IUser = await userService.create(name, username, password);
      history.push("/");
      dispatch(
        startSetNotification("success", `Create new user ${newUser.name}`),
      );
    } catch (err) {
      console.log(err);
      console.log(err.response);
      const errorMessage =
        err.response.status === 400
          ? err.response.data.error
          : "Fail to add new user";
      dispatch(startSetNotification("error", errorMessage));
    }
  };
};
