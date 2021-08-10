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

export const startDeleteBlog = (blog: IBlog, token: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await blogService.remove(blog.id, token);
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

const doCreateBlog = (blog: ICreateBlog) => ({
  type: "CREATE_BLOG",
  data: blog,
});

export const startCreateBlog = (blog: ICreateBlog, user: IUserWithToken) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const newBlog = await blogService.create(blog, user.token);
      const updatedBlog = {
        ...newBlog,
        user: { name: user.name, username: user.username, id: newBlog.user },
      };
      dispatch(doCreateBlog(updatedBlog));
      dispatch(
        startSetNotification(
          "success",
          `Create ${blog.title} by ${blog.author}`,
        ),
      );
    } catch (err) {
      console.log(err);
      dispatch(startSetNotification("error", `Fail to create ${blog.title}`));
    }
  };
};

const doLikeBlog = (id: string) => ({
  type: "LIKE_BLOG",
  data: { id },
});

export const startLikeBlog = (blog: IUpdateBlog, token: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await blogService.updateLikes(blog, token);
      dispatch(doLikeBlog(blog.id));
    } catch (err) {
      console.log(err);
    }
  };
};
