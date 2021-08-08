import { useSelector } from "react-redux";
import Blog from "./Blog";

const Blogs = () => {
  const blogs: IBlog[] = useSelector((state: RootState) => state.blogs);

  return (
    <div>
      <h3>Blogs</h3>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
