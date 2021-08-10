import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usersSelector } from "../selectors";
import { startInitUsers } from "../actions/user";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startInitUsers());
  }, [dispatch]);

  const users = useSelector(usersSelector);
  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <a href={`/users/${user.id}`}>{user.name}</a>
            </td>
            <td>{user.blogs.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
