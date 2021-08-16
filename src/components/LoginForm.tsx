import {
  TextField,
  Button,
  makeStyles,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { useDispatch } from "react-redux";

import { useInputField } from "../hooks";

import { startLogin } from "../actions/auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  avatar: {
    margin: "auto",
    background: "rgb(220, 0, 78)",
  },
  paper: {
    padding: 20,
    height: "500px",
    width: "300px",
    margin: "auto",
  },
  typography: {
    fontSize: "1.5em",
    marginTop: "2vh",
  },
}));

const LoginForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const username = useInputField();
  const password = useInputField();

  async function handleLogin(event: React.SyntheticEvent) {
    event.preventDefault();
    if (!username.value || !password.value) {
      alert("Input fields must not be empty");
      return;
    }
    username.reset();
    password.reset();
    dispatch(startLogin(username.value, password.value, history));
  }

  return (
    <Grid>
      <Paper className={classes.paper}>
        <form className={classes.root} onSubmit={handleLogin}>
          <Grid>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              variant="h2"
              component="h2"
              className={classes.typography}
            >
              Sign in
            </Typography>
          </Grid>
          <TextField
            label="Username"
            data-testid="username"
            variant="filled"
            required
            value={username.value}
            onChange={username.onChange}
          />
          <TextField
            label="Password"
            data-testid="password"
            variant="filled"
            type="password"
            required
            value={password.value}
            onChange={password.onChange}
          />

          <div>
            <Button
              data-testid="login-btn"
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
