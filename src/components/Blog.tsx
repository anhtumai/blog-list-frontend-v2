import { useState } from "react";
import { useSelector } from "react-redux";

interface IBlogProps {
  blog: IBlog;
}

const Blog = ({ blog }: IBlogProps) => {
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
        >
          <small>remove</small>
        </button>
      </div>
    </div>
  );
};

export default Blog;
