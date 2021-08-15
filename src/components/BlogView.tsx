import { useSelector } from "react-redux";

import { Typography, Paper, Link as NavLink, Box } from "@material-ui/core";

import { blogsSelector } from "../selectors";
import CommentsSection from "./CommentsSection";

import LikeSection from "./LikeSection";

const rootStyle = {
  marginTop: "4vh",
};

const detailStyle = {
  marginTop: "2vh",
};

const BlogView = ({ id }: { id: string }) => {
  const blogs = useSelector(blogsSelector);

  const viewedBlog = blogs.find((blog) => blog.id === id);

  if (viewedBlog === undefined) return <div>Blog not found</div>;

  return (
    <Box component="div" style={rootStyle}>
      <Paper>
        <Typography component="h6" variant="h6">
          {viewedBlog.title} {viewedBlog.author}
        </Typography>
        <Typography style={detailStyle}>
          <NavLink href={viewedBlog.url} target="_blank" rel="noreferrer">
            {viewedBlog.url}
          </NavLink>
        </Typography>
        <LikeSection blog={viewedBlog} />
        <Typography component="p">added by {viewedBlog.user.name}</Typography>
      </Paper>
      <CommentsSection blog={viewedBlog} />
    </Box>
  );
};

export default BlogView;
