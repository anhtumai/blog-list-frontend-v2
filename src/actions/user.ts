import { Dispatch } from "react";
import userService from "../services/user";

export const startInitUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    const users = await userService.getAll();
    dispatch({
      type: "INIT_USERS",
      data: users,
    });
  };
};
