import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useInputField } from "../hooks";

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
}));

const RegisterForm = () => {
  const classes = useStyles();

  const username = useInputField();
  const name = useInputField();
  const password = useInputField();
  const confirmedPassword = useInputField();

  function resetFields() {
    username.reset();
    name.reset();
    password.reset();
  }

  return (
    <form className={classes.root} onSubmit={() => console.log("submit")}>
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
        label="ConfirmedPassword"
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
  );
};

export default RegisterForm;
