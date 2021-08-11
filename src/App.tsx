import Notification from "./components/Notification";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startInitBlogs } from "./actions/blog";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import UsersPage from "./components/UsersPage";
import SingleUserPage from "./components/SingleUserPage";
import SingleBlogPage from "./components/SingleBlogPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInitBlogs());
  }, [dispatch]);

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
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
