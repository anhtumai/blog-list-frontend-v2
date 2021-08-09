import { useSelector } from "react-redux";

const BlogView = ({ id }: { id: string }) => {
  const blogs = useSelector((state: RootState) => state.blogs);

  const viewedBlog = blogs.find((blog) => blog.id === id);

  if (viewedBlog === undefined) return <div>Blog not found</div>;

  return (
    <div>
      <h2>
        {viewedBlog.title} {viewedBlog.author}
      </h2>
      <div>
        <a href={viewedBlog.url}>{viewedBlog.url}</a>
        <p>{viewedBlog.likes} likes</p>
        <p>added by {viewedBlog.user.name}</p>
      </div>
    </div>
  );
};

export default BlogView;
