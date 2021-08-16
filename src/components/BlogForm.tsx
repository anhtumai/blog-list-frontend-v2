import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startCreateBlog } from "../actions/blog";
import { userSelector } from "../selectors";
import { useInputField } from "../hooks";

import {
  Typography,
  TextField,
  Button,
  Paper,
  makeStyles,
} from "@material-ui/core";

interface IBlogFormProps {
  toggleVisibility: () => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 0,
    marginLeft: 0,
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: 0,
    //padding: 20,
    height: "240px",
    width: "400px",
  },
  buttons: {
    marginTop: "2vh",
    display: "flex",
    justifyContent: "space-evenly",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  input: {
    fontSize: "0.81rem",
    //paddingBottom: "0.6rem",
  },
}));

const BlogForm = ({ toggleVisibility }: IBlogFormProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = useSelector(userSelector) as IUserWithToken;

  const title = useInputField();
  const author = useInputField();
  const url = useInputField();

  function resetInputFields() {
    title.reset();
    author.reset();
    url.reset();
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    toggleVisibility();
    const submittedInfo = {
      title: title.value,
      author: author.value,
      url: url.value,
    };
    resetInputFields();
    dispatch(startCreateBlog(submittedInfo, user));
  }

  return (
    <Paper className={classes.paper}>
      <form
        data-testid="blog-form"
        onSubmit={handleSubmit}
        className={classes.root}
      >
        <Typography variant="h6" gutterBottom>
          Add a new
        </Typography>
        <TextField
          required
          id="title"
          name="title"
          label="Title"
          fullWidth
          value={title.value}
          onChange={title.onChange}
          InputProps={{
            classes: {
              input: classes.input,
            },
          }}
        />
        <TextField
          required
          id="author"
          name="author"
          label="Author"
          value={author.value}
          onChange={author.onChange}
          InputProps={{
            classes: {
              input: classes.input,
            },
          }}
        />
        <TextField
          required
          id="url"
          name="url"
          label="Url"
          value={url.value}
          onChange={url.onChange}
          InputProps={{
            classes: {
              input: classes.input,
            },
          }}
        />
        <div className={classes.buttons}>
          <Button variant="contained" size="small" onClick={toggleVisibility}>
            Cancel
          </Button>
          <Button
            data-testid="blog-submit-btn"
            size="small"
            type="submit"
            variant="contained"
            color="primary"
          >
            Create
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default BlogForm;
