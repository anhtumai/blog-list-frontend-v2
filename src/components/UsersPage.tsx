import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import { userSelector } from "../selectors";
import Users from "./Users";
import { headerStyle } from "./styles";

const UsersPage = () => {
  const user = useSelector(userSelector);

  if (user === null) return <div>You must log in first to view this page</div>;

  return (
    <div>
      <Typography component="h5" variant="h5" style={headerStyle}>
        Blog App
      </Typography>
      <Typography component="h6" variant="h6" style={headerStyle}>
        Users
      </Typography>
      <Users />
    </div>
  );
};

export default UsersPage;
