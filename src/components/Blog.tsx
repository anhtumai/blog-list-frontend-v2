import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { userSelector } from "../selectors";
import { startDeleteBlog } from "../actions/blog";

import LikeSection from "./LikeSection";

interface IBlogProps {
  blog: IBlog;
}

function handleDelete(dispatch: Dispatch<any>, blog: IBlog, token: string) {
  if (!window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) return;

  dispatch(startDeleteBlog(blog, token));
}

const Blog = ({ blog }: IBlogProps) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(userSelector);
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

  console.log(blog.url);

  return (
    <div data-testid="blog" style={blogStyle}>
      <div>
        <Link to={`/blogs/${blog.id}`}>
          {blog.title} {blog.author}{" "}
        </Link>
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
          <a href={blog.url} target="_blank" rel="noreferrer">
            {blog.url}
          </a>
        </p>
        <LikeSection blog={blog} />
        <p>{blog.user.name}</p>
        <button
          data-testid="remove-btn"
          type="button"
          style={removeButtonStyle}
          onClick={() => handleDelete(dispatch, blog, currentUser.token)}
        >
          <small>remove</small>
        </button>
      </div>
    </div>
  );
};

export default Blog;
