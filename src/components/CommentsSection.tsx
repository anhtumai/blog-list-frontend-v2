import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Typography,
  Button,
  TextField,
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import CommentIcon from "@material-ui/icons/Comment";

import { useInputField } from "../hooks";

import { startCreateComment } from "../actions/comment";
import { userSelector } from "../selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5vh",
  },
  form: {
    marginTop: "2vh",
  },
  button: {
    marginBottom: 0,
  },
}));

const CommentsSection = ({ blog }: { blog: IBlog }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = useSelector(userSelector) as IUserWithToken;

  const content = useInputField();

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const submittedInfo = { content: content.value };
    content.reset();
    dispatch(startCreateComment(blog.id, submittedInfo, user.token));
  }
  return (
    <Paper className={classes.root}>
      <Typography component="h6" variant="h6">
        comments
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid
          container
          item
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          xs={12}
        >
          <TextField
            required
            variant="outlined"
            size="small"
            label="comment"
            type="text"
            value={content.value}
            onChange={content.onChange}
          />
          <Button
            size="small"
            variant="text"
            color="primary"
            type="submit"
            className={classes.button}
          >
            add comment
          </Button>
        </Grid>
      </form>
      <List component="ul" dense={true}>
        {blog.comments.map((comment) => (
          <ListItem key={comment.id}>
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText>{comment.content}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CommentsSection;
