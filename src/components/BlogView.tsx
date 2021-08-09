import { useSelector } from "react-redux";

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
        <h3>comments</h3>
        <ul>
          {viewedBlog.comments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogView;
