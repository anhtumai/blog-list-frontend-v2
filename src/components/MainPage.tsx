import Typography from "@material-ui/core/Typography";

import TogglableBlogForm from "./TogglableBlogForm";
import Blogs from "./Blogs";

import { headerStyle } from "./styles";

const MainPage = () => {
  return (
    <div>
      <Typography component="h5" variant="h5" style={headerStyle}>
        Blog App
      </Typography>
      <TogglableBlogForm />
      <Blogs />
    </div>
  );
};

export default MainPage;
