import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

import { startInitUsers } from "../actions/user";
import { userSelector } from "../selectors";

import LoginBanner from "./LoginBanner";
import BlogView from "./BlogView";

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
      <h2>blogs</h2>
      <LoginBanner />
      <BlogView id={blogId} />
    </div>
  );
};

export default SingleBlogPage;
