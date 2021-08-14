import { TableContainer, Paper, TableBody, Table } from "@material-ui/core";
import { useSelector } from "react-redux";
import { blogsSelector } from "../selectors";
import Blog from "./Blog";

const Blogs = () => {
  const blogs: IBlog[] = useSelector(blogsSelector);

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
