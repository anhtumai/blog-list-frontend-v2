import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

import { startInitUsers } from "../actions/user";
import { userSelector } from "../selectors";

import BlogView from "./BlogView";
import { Typography } from "@material-ui/core";

const headerStyle = {
  marginTop: "3vh",
};

const SingleBlogPage = () => {
  const blogId = (useParams() as any).id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInitUsers());
  }, [dispatch]);
  const user = useSelector(userSelector);

  if (user === null) return <div>You must log in first to view this page</div>;

  return (
    <div>
      <Typography component="h5" variant="h5" style={headerStyle}>
        Blog App
      </Typography>
      <BlogView id={blogId} />
    </div>
  );
};

export default SingleBlogPage;
