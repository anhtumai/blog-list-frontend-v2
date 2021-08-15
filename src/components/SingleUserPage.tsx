import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { startInitUsers } from "../actions/user";

import { useParams } from "react-router";

import UserView from "./UserView";
import Typography from "@material-ui/core/Typography";

import { userSelector } from "../selectors";

import { headerStyle } from "./styles";

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
      <Typography component="h5" variant="h5" style={headerStyle}>
        Blog App
      </Typography>
      <UserView id={userId} />
    </div>
  );
};

export default SingleUserPage;
