import { useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import NoteIcon from "@material-ui/icons/Note";

import { usersSelector } from "../selectors";

import { headerStyle } from "./styles";

const UserView = ({ id }: { id: string }) => {
  const users = useSelector(usersSelector);

  const viewedUser = users.find((user) => user.id === id);

  if (viewedUser === undefined) return <div>User not found</div>;

  return (
    <div>
      <Typography component="h6" variant="h6" style={headerStyle}>
        {viewedUser.name}
      </Typography>
      <Paper>
        <Typography component="h6" style={headerStyle}>
          added blogs
        </Typography>
        <List component="ul" dense={true}>
          {viewedUser.blogs.map((blog) => (
            <ListItem key={blog.id.toString()}>
              <ListItemIcon>
                <NoteIcon />
              </ListItemIcon>
              <ListItemText>{blog.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default UserView;
