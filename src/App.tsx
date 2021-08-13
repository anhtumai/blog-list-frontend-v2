import Notification from "./components/Notification";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startInitBlogs } from "./actions/blog";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import UsersPage from "./components/UsersPage";
import SingleUserPage from "./components/SingleUserPage";
import SingleBlogPage from "./components/SingleBlogPage";
import RegistrationPage from "./components/RegisterPage";
import { userSelector } from "./selectors";
import LoginPage from "./components/LoginPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInitBlogs());
  }, [dispatch]);

  const user = useSelector(userSelector);

  return (
    <Router>
      <Header />
      <h1>Blog List Application</h1>
      <Notification />
      <Switch>
        <Route path="/users/:id">
          <SingleUserPage />
        </Route>
        <Route path="/blogs/:id">
          <SingleBlogPage />
        </Route>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route
          path="/"
          render={() => (user ? <MainPage /> : <Redirect to="/login" />)}
        />
      </Switch>
    </Router>
  );
}

export default App;
