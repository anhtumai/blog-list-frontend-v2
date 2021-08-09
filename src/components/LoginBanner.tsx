import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { doLogout } from "../actions/auth";
import { startSetNotification } from "../actions/notification";

const LoginBanner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: RootState) => state.user);

  function handleLogout() {
    dispatch(doLogout());
    dispatch(startSetNotification("success", "Log out successfully"));
    history.push("/");
  }

  return (
    <p>
      {user.name} logged in &nbsp;
      <button type="button" onClick={handleLogout}>
        <small>logout</small>
      </button>
    </p>
  );
};

export default LoginBanner;
