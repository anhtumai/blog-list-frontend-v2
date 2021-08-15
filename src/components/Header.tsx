import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
        <Button color="inherit" disabled>
          Blog List
        </Button>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/users">
          Users
        </Button>
        <Box component="div" display="flex" className={classes.emptyBox}></Box>
        {user && (
          <React.Fragment>
            <Tooltip title={`logged in as ${user.name}`}>
              <IconButton aria-label="random text">
                <AccountCircleIcon />{" "}
              </IconButton>
            </Tooltip>

            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </React.Fragment>
        )}
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
