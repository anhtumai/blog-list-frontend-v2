import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Grid, Paper, Avatar, Typography, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import { useInputField } from "../hooks";
import { startCreateUser } from "../actions/user";

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
    background: "#1bbd7e",
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

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const username = useInputField();
  const name = useInputField();
  const password = useInputField();
  const confirmedPassword = useInputField();

  function resetFields() {
    username.reset();
    name.reset();
    password.reset();
    confirmedPassword.reset();
  }

  function validateForm() {
    if (password.value !== confirmedPassword.value) {
      alert("Password and confirmed password do not match");
      return false;
    }
    const nameRegex = /^[a-zA-Z.' ]+$/;
    if (!nameRegex.test(name.value)) {
      alert("Provided name is invalid");
      return false;
    }
    if (password.value.length < 3) {
      alert("Password should contain more than 3 characters");
      return false;
    }
    if (username.value.length < 3) {
      alert("Username should contain more than 3 characters");
      return false;
    }
    return true;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateForm()) return;
    resetFields();
    dispatch(
      startCreateUser(name.value, username.value, password.value, history),
    );
  }

  return (
    <Grid>
      <Paper className={classes.paper}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <Grid>
            <Avatar className={classes.avatar}>
              <AddIcon />
            </Avatar>
            <Typography
              variant="h2"
              component="h2"
              className={classes.typography}
            >
              Sign up
            </Typography>
          </Grid>
          <TextField
            label="Username"
            variant="filled"
            required
            value={username.value}
            onChange={username.onChange}
          />
          <TextField
            label="Name"
            variant="filled"
            required
            value={name.value}
            onChange={name.onChange}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password.value}
            onChange={password.onChange}
          />
          <TextField
            label="Retype password"
            variant="filled"
            type="password"
            required
            value={confirmedPassword.value}
            onChange={confirmedPassword.onChange}
          />
          <div>
            <Button variant="contained" onClick={resetFields}>
              Reset
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      </Paper>{" "}
    </Grid>
  );
};

export default RegisterForm;
