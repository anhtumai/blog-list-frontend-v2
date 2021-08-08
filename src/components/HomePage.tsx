import BlogForm from "./BlogForm";
import Blogs from "./Blogs";
import LoginBanner from "./LoginBanner";

const HomePage = () => {
  return (
    <div>
      <LoginBanner />
      <BlogForm />
      <Blogs />
    </div>
  );
};

export default HomePage;
