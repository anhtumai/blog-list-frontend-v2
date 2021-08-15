import { Typography, Button } from "@material-ui/core";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { startLikeBlog } from "../actions/blog";
import { userSelector } from "../selectors";

function handleLike(dispatch: Dispatch<any>, blog: IBlog, token: string) {
  const updatedBlog: IUpdateBlog = {
    id: blog.id,
    url: blog.url,
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
  };
  dispatch(startLikeBlog(updatedBlog, token));
}

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
  return (
    <Typography style={typographyStyle}>
      <span data-testid="like">likes {blog.likes}</span>
      <Button
        style={buttonStyle}
        size="small"
        data-testid="like-btn"
        type="button"
        onClick={() => handleLike(dispatch, blog, user.token)}
        startIcon={<ThumbUpIcon />}
      >
        like
      </Button>
    </Typography>
  );
};

export default LikeSection;
