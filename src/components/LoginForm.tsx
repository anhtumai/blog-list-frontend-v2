import { useDispatch } from "react-redux";

import { useInputField } from "../hooks";

import { startLogin } from "../actions/auth";

const LoginForm = () => {
  const dispatch = useDispatch();

  const username = useInputField();
  const password = useInputField();

  async function handleLogin(event: React.SyntheticEvent) {
    event.preventDefault();
    if (!username.value || !password.value) {
      alert("Input fields must not be empty");
      return;
    }
    dispatch(startLogin(username.value, password.value));
  }

  return (
    <div>
      <h2>login to application</h2>

      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            data-testid="username"
            value={username.value}
            onChange={username.onChange}
          />
        </div>

        <div>
          password
          <input
            data-testid="password"
            type="password"
            value={password.value}
            onChange={password.onChange}
          />
        </div>
        <button data-testid="login-btn" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
