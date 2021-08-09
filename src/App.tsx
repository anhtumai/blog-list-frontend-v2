import Notification from "./components/Notification";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startInitBlogs } from "./actions/blog";
import MainPage from "./components/MainPage";
import UsersPage from "./components/UsersPage";
import SingleUserPage from "./components/SingleUserPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInitBlogs());
  }, [dispatch]);

  return (
    <Router>
      <h1>Blog List Application</h1>
      <Notification />
      <Switch>
        <Route path="/users/:id">
          <SingleUserPage />
        </Route>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
