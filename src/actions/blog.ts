import { Dispatch } from "react";
import blogService from "../services/blog";

export const startInitBlogs = () => {
  return async (dispatch: Dispatch<any>) => {
    const blogs = await blogService.getAll();
    dispatch({
      type: "INIT_BLOGS",
      data: blogs,
    });
  };
};
