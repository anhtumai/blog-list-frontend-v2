import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLikeBlog } from "../actions/blog";

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

const LikeSection = ({ blog }: { blog: IBlog }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  return (
    <p>
      <span data-testid="like">likes {blog.likes}</span>
      <button
        data-testid="like-btn"
        type="button"
        onClick={() => handleLike(dispatch, blog, user.token)}
      >
        <small>like</small>
      </button>
    </p>
  );
};

export default LikeSection;
