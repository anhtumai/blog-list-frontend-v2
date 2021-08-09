import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startInitUsers } from "../actions/user";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startInitUsers());
  }, [dispatch]);

  const users = useSelector((state: RootState) => state.users);
  console.log(users);
  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.blogs.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
