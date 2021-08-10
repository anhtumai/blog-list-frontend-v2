import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { userSelector } from "../selectors";
import { useHistory } from "react-router";
import { doLogout } from "../actions/auth";
import { startSetNotification } from "../actions/notification";

const LoginBanner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(userSelector);

  function handleLogout() {
    dispatch(doLogout());
    dispatch(startSetNotification("success", "Log out successfully"));
    history.push("/");
  }

  return (
    <p>
      <Link to="/">blogs</Link> <Link to="/users">users</Link> {user.name}{" "}
      logged in &nbsp;
      <button type="button" onClick={handleLogout}>
        <small>logout</small>
      </button>
    </p>
  );
};

export default LoginBanner;
