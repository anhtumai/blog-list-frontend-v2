import { useSelector, useDispatch } from "react-redux";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs: IBlog[] = useSelector((state) => (state as any).blogs);

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
