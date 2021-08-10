import { useSelector } from "react-redux";

import { usersSelector } from "../selectors";

const UserView = ({ id }: { id: string }) => {
  const users = useSelector(usersSelector);

  const viewedUser = users.find((user) => user.id === id);

  if (viewedUser === undefined) return <div>User not found</div>;

  return (
    <div>
      <h2>{viewedUser.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {viewedUser.blogs.map((blog) => (
          <li key={blog.id.toString()}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserView;
