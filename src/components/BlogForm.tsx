import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startCreateBlog } from "../actions/blog";
import { userSelector } from "../selectors";
import { useInputField } from "../hooks";

import InputWithLabel from "./InputWithLabel";

const BlogForm = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelector) as IUserWithToken;

  const title = useInputField();
  const author = useInputField();
  const url = useInputField();

  function resetInputFields() {
    title.reset();
    author.reset();
    url.reset();
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const submittedInfo = {
      title: title.value,
      author: author.value,
      url: url.value,
    };
    resetInputFields();
    dispatch(startCreateBlog(submittedInfo, user));
  }

  return (
    <div>
      <h3>Add a new:</h3>
      <form data-testid="blog-form" onSubmit={onSubmit}>
        <InputWithLabel
          htmlFor="title"
          value={title.value}
          onInputChange={title.onChange}
        >
          <span>title: </span>
        </InputWithLabel>
        <br />
        <InputWithLabel
          htmlFor="author"
          value={author.value}
          onInputChange={author.onChange}
        >
          <span>author: </span>
        </InputWithLabel>
        <br />
        <InputWithLabel
          htmlFor="url"
          value={url.value}
          onInputChange={url.onChange}
        >
          <span>url: </span>
        </InputWithLabel>{" "}
        <div>
          <button data-testid="blog-submit-btn" type="submit">
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
