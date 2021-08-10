import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { startInitUsers } from "../actions/user";

import { useParams } from "react-router";

import LoginBanner from "./LoginBanner";
import UserView from "./UserView";
import { userSelector } from "../selectors";

const SingleUserPage = () => {
  const userId = (useParams() as any).id;
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
      <UserView id={userId} />
    </div>
  );
};

export default SingleUserPage;
