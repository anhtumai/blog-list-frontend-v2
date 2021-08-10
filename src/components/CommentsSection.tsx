import { useDispatch, useSelector } from "react-redux";
import { useInputField } from "../hooks";

import { startCreateComment } from "../actions/comment";

const CommentsSection = ({ blog }: { blog: IBlog }) => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const content = useInputField();

  const liStyle = {
    marginTop: "10px",
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const submittedInfo = { content: content.value };
    content.reset();
    dispatch(startCreateComment(blog.id, submittedInfo, user.token));
  }
  return (
    <div>
      <h3>comments</h3>
      <form onSubmit={onSubmit}>
        <input
          id="content"
          type="text"
          value={content.value}
          onChange={content.onChange}
        />
        <button type="submit">add comment</button>
      </form>
      <ul>
        {blog.comments.map((comment) => (
          <li style={liStyle} key={comment.id}>
            {comment.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
