import Notification from "./components/Notification";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startInitBlogs } from "./actions/blog";
import MainPage from "./components/MainPage";

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
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
