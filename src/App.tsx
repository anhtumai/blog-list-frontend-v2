import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import { useEffect } from "react";
import { startInitBlogs } from "./actions/blog";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInitBlogs());
  }, [dispatch]);
  const user = useSelector((state) => (state as any).user);

  const body = user !== null ? <HomePage /> : <LoginForm />;

  return (
    <div>
      <Notification />
      {body}
    </div>
  );
}

export default App;
