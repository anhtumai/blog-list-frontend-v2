import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { usersSelector } from "../selectors";
import { startInitUsers } from "../actions/user";

const useStyles = makeStyles({
  root: {
    width: "500px",
  },
});

const Users = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(startInitUsers());
  }, [dispatch]);

  const users = useSelector(usersSelector);
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">blogs created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </TableCell>
              <TableCell align="right">{user.blogs.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
