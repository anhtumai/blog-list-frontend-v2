import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { blogsSelector } from "../selectors";
import Blog from "./Blog";

const headerStyle = {
  marginTop: "4vh",
};

const Blogs = () => {
  const blogs: IBlog[] = useSelector(blogsSelector);

  return (
    <div>
      <Typography variant="h6" component="h6" style={headerStyle}>
        Blogs
      </Typography>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
