import { Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { startLikeBlog } from "../actions/blog";
import { userSelector } from "../selectors";

const typographyStyle = {
  marginTop: 0,
  marginBottom: 0,
  display: "flex",
};

const buttonStyle = {
  fontSize: "0.6rem",
  paddingTop: 0,
  marginLeft: "2vw",
};

const LikeSection = ({ blog }: { blog: IBlog }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector) as IUserWithToken;
  function handleLike(blog: IBlog, token: string) {
    const updatedBlog: IUpdateBlog = {
      id: blog.id,
      url: blog.url,
      title: blog.title,
      author: blog.author,
      likes: blog.likes,
    };
    dispatch(startLikeBlog(updatedBlog, token));
  }
  return (
    <Typography style={typographyStyle}>
      <span data-testid="like">likes {blog.likes}</span>
      <Button
        data-testid="like-btn"
        style={buttonStyle}
        size="small"
        type="button"
        onClick={() => handleLike(blog, user.token)}
        startIcon={<ThumbUpIcon />}
      >
        like
      </Button>
    </Typography>
  );
};

export default LikeSection;
