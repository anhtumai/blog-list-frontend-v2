import React, { useState, useImperativeHandle } from "react";
import Button from "@material-ui/core/Button";
import BlogForm from "./BlogForm";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const Togglable = React.forwardRef((props: {}, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  function toggleVisibility() {
    setVisible(!visible);
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button
          type="button"
          size="medium"
          startIcon={<NoteAddIcon />}
          onClick={toggleVisibility}
        >
          Create new blog
        </Button>
      </div>
      <div style={showWhenVisible}>
        <BlogForm toggleVisibility={toggleVisibility} />
      </div>
    </div>
  );
});

export default Togglable;
