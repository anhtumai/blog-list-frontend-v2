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
      let errorMessage = "";
      switch (err.response.status) {
        case 403:
          errorMessage = "User has no permission to delete this blog.";
          break;
        case 401:
          errorMessage = "Unauthorized. Token possibily expired.";
          break;
        default:
          errorMessage = `Fail to remove ${blog.title}`;
      }
      dispatch(startSetNotification("error", errorMessage));
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
          `a new blog ${blog.title} by ${blog.author} added`,
        ),
      );
    } catch (err) {
      console.log(err);
      let errorMessage = "";
      switch (err.response.status) {
        case 401:
          errorMessage = "Unauthorized. Token possibily expired.";
          break;
        default:
          errorMessage = `Fail to create ${blog.title}`;
      }
      dispatch(startSetNotification("error", errorMessage));
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
