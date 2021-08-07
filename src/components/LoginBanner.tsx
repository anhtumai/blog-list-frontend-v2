import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { doLogout } from "../actions/auth";
import { startSetNotification } from "../actions/notification";

const LoginBanner = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => (state as any).user);

  function handleLogout() {
    dispatch(doLogout());
    dispatch(startSetNotification("success", "Log out successfully"));
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
