import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { startLikeBlog } from "../actions/blog";

function handleLike(dispatch: Dispatch<any>, blog: IBlog) {
  const updatedBlog: IUpdateBlog = {
    id: blog.id,
    url: blog.url,
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
  };
  dispatch(startLikeBlog(updatedBlog));
}

const LikeSection = ({ blog }: { blog: IBlog }) => {
  const dispatch = useDispatch();
  return (
    <p>
      <span data-testid="like">likes {blog.likes}</span>
      <button
        data-testid="like-btn"
        type="button"
        onClick={() => handleLike(dispatch, blog)}
      >
        <small>like</small>
      </button>
    </p>
  );
};

export default LikeSection;
