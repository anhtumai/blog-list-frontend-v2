import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSetNotification } from "../actions/notification";
import { startDeleteBlog } from "../actions/blog";

interface IBlogProps {
  blog: IBlog;
}

function handleDelete(dispatch: Dispatch<any>, blog: IBlog) {
  if (!window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) return;

  dispatch(startDeleteBlog(blog));
}

const Blog = ({ blog }: IBlogProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => (state as any).user);
  const owned = currentUser.username === blog.user.username ? true : false;

  const [expand, setExpand] = useState(false);

  const showWhenVisible = { display: expand ? "" : "none" };

  const removeButtonStyle = {
    display: owned ? "" : "none",
    backgroundColor: "#008CBA",
  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
    lineHeight: "2px",
  };

  return (
    <div data-testid="blog" style={blogStyle}>
      <div>
        {blog.title} {blog.author}{" "}
        <button
          data-testid="blog-toggle-btn"
          id="toggleButton"
          type="button"
          onClick={() => setExpand(!expand)}
        >
          <small>{expand ? "hide" : "view"}</small>
        </button>
      </div>
      <div style={showWhenVisible}>
        <p>
          <a href={blog.url}>{blog.url}</a>
        </p>
        <p>
          <span data-testid="like">likes {blog.likes}</span>
          <button data-testid="like-btn" type="button">
            <small>like</small>
          </button>
        </p>
        <p>{blog.user.name}</p>
        <button
          data-testid="remove-btn"
          type="button"
          style={removeButtonStyle}
          onClick={() => handleDelete(dispatch, blog)}
        >
          <small>remove</small>
        </button>
      </div>
    </div>
  );
};

export default Blog;
