import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { userSelector } from "../selectors";
import { useHistory } from "react-router";
import { doLogout } from "../actions/auth";
import { startSetNotification } from "../actions/notification";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  emptyBox: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();

  const user = useSelector(userSelector);

  function handleLogout() {
    dispatch(doLogout());
    dispatch(startSetNotification("success", "Log out successfully"));
    history.push("/");
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Blogs
        </Button>
        <Button color="inherit" component={Link} to="/users">
          Users
        </Button>
        <Box component="div" display="flex" className={classes.emptyBox}></Box>
        {user !== null ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : null}
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
