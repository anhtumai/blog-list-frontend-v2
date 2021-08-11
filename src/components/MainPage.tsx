import { useSelector } from "react-redux";

import { userSelector } from "../selectors";

import BlogForm from "./BlogForm";
import Blogs from "./Blogs";
import LoginForm from "./LoginForm";

const MainPage = () => {
  const user = useSelector(userSelector);

  if (user !== null)
    return (
      <div>
        <BlogForm />
        <Blogs />
      </div>
    );
  return <LoginForm />;
};

export default MainPage;
