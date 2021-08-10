import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { blogsSelector } from "../selectors";
import CommentsSection from "./CommentsSection";

import LikeSection from "./LikeSection";

const BlogView = ({ id }: { id: string }) => {
  const blogs = useSelector(blogsSelector);

  const viewedBlog = blogs.find((blog) => blog.id === id);

  if (viewedBlog === undefined) return <div>Blog not found</div>;

  const divStyle = {
    lineHeight: 0.4,
  };

  return (
    <div>
      <h2>
        {viewedBlog.title} {viewedBlog.author}
      </h2>
      <div style={divStyle}>
        <Link to={viewedBlog.url}>{viewedBlog.url}</Link>
        <LikeSection blog={viewedBlog} />
        <p>added by {viewedBlog.user.name}</p>
        <CommentsSection blog={viewedBlog} />
      </div>
    </div>
  );
};

export default BlogView;
