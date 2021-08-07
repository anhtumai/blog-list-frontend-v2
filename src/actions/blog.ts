import { Dispatch } from "react";
import blogService from "../services/blog";
import { startSetNotification } from "./notification";

export const startInitBlogs = () => {
  return async (dispatch: Dispatch<any>) => {
    const blogs = await blogService.getAll();
    dispatch({
      type: "INIT_BLOGS",
      data: blogs,
    });
  };
};

const doDeleteBlog = (id: string) => ({
  type: "DELETE_BLOG",
  data: { id },
});

export const startDeleteBlog = (blog: IBlog) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await blogService.remove(blog.id);
      dispatch(doDeleteBlog(blog.id));
      dispatch(
        startSetNotification(
          "success",
          `Remove ${blog.title} by ${blog.author}`,
        ),
      );
    } catch (err) {
      console.log(err);
      dispatch(startSetNotification("error", `Fail to remove ${blog.title}`));
    }
  };
};
