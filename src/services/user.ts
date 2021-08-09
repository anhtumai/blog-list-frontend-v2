import axios from "axios";

const baseUrl = "/api/users";

async function getAll(): Promise<IUser[]> {
  const response = await axios.get(baseUrl);
  return response.data;
}

const userService = { getAll };

export default userService;
