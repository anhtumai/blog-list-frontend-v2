import { useSelector } from "react-redux";

import LoginBanner from "./LoginBanner";
import Users from "./Users";

const UsersPage = () => {
  const user = useSelector((state: RootState) => state.user);

  if (user === null) return <div>You must log in first to view this page</div>;

  return (
    <div>
      <h2>blogs</h2>
      <LoginBanner />
      <h2>Users</h2>
      <Users />
    </div>
  );
};

export default UsersPage;
