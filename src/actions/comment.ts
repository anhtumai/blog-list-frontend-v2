import { Dispatch } from "react";
import commentService from "../services/comment";
//import { startSetNotification } from "./notification";

const doCreateComment = (blogId: string, comment: IComment) => ({
  type: "ADD_COMMENT",
  data: {
    blogId,
    comment,
  },
});

export const startCreateComment = (
  blogId: string,
  commentInfo: ICreateComment,
  token: string,
) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const newComment: IComment = await commentService.create(
        blogId,
        commentInfo,
        token,
      );
      dispatch(doCreateComment(blogId, newComment));
    } catch (err) {
      console.log(err);
    }
  };
};
