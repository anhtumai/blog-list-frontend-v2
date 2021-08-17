import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/api/users`;

async function getAll(): Promise<IUser[]> {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(name: string, username: string, password: string) {
  const response = await axios.post(baseUrl, { name, username, password });
  return response.data;
}

const userService = { getAll, create };

export default userService;
