import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { userSelector } from "../selectors";
import { startDeleteBlog } from "../actions/blog";

import LikeSection from "./LikeSection";
import {
  Button,
  Paper,
  Box,
  Link as NavLink,
  Typography,
} from "@material-ui/core";

interface IBlogProps {
  blog: IBlog;
}

const useStyles = makeStyles((theme) => ({
  root: {
    border: "outset",
    margin: theme.spacing(1),
    display: "block",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function handleDelete(dispatch: Dispatch<any>, blog: IBlog, token: string) {
  if (!window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) return;

  dispatch(startDeleteBlog(blog, token));
}

const Blog = ({ blog }: IBlogProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const currentUser = useSelector(userSelector) as IUserWithToken;
  const [expand, setExpand] = useState(false);

  const owned = currentUser.username === blog.user.username ? true : false;

  const showWhenVisible = { display: expand ? "" : "none" };

  const removeButtonStyle = {
    display: owned ? "" : "none",
    paddingLeft: "1vw",
    fontSize: "0.6rem",
  };

  return (
    <Paper className={classes.root}>
      <Box className={classes.top}>
        <Link to={`/blogs/${blog.id}`}>
          {blog.title} {blog.author}
        </Link>
        <Button size="small" onClick={() => setExpand(!expand)}>
          {expand ? "hide" : "view"}
        </Button>
      </Box>
      <Paper style={showWhenVisible}>
        <Typography>
          <NavLink href={blog.url} target="_blank" rel="noreferrer">
            {blog.url}
          </NavLink>
        </Typography>
        <LikeSection blog={blog} />
        <Typography component="p">{blog.user.name}</Typography>
        <Button
          data-testid="remove-btn"
          color="secondary"
          size="small"
          variant="contained"
          type="button"
          style={removeButtonStyle}
          onClick={() => handleDelete(dispatch, blog, currentUser.token)}
          startIcon={<DeleteIcon />}
        >
          Remove
        </Button>
      </Paper>
    </Paper>
  );
};

export default Blog;
