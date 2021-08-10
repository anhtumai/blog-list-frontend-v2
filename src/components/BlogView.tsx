import { useSelector } from "react-redux";
import CommentsSection from "./CommentsSection";

import LikeSection from "./LikeSection";

const BlogView = ({ id }: { id: string }) => {
  const blogs = useSelector((state: RootState) => state.blogs);

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
        <a href={viewedBlog.url}>{viewedBlog.url}</a>
        <LikeSection blog={viewedBlog} />
        <p>added by {viewedBlog.user.name}</p>
        <CommentsSection blog={viewedBlog} />
      </div>
    </div>
  );
};

export default BlogView;
