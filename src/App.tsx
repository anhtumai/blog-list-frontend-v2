import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import { useDispatch, useSelector } from "react-redux";
import Blogs from "./components/Blogs";
import { useEffect } from "react";
import { startInitBlogs } from "./actions/blog";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInitBlogs());
  });
  const user = useSelector((state) => (state as any).user);

  const body = user !== null ? <Blogs /> : <LoginForm />;

  return (
    <div>
      <Notification />
      {body}
    </div>
  );
}

export default App;
