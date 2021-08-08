import { useSelector } from "react-redux";
import BlogForm from "./BlogForm";
import Blogs from "./Blogs";
import LoginBanner from "./LoginBanner";
import LoginForm from "./LoginForm";

const MainPage = () => {
  const user = useSelector((state: RootState) => state.user);

  if (user !== null)
    return (
      <div>
        <LoginBanner />
        <BlogForm />
        <Blogs />
      </div>
    );
  return <LoginForm />;
};

export default MainPage;
