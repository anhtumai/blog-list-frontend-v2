import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/api/login`;

console.log(baseUrl);

async function login(credentials: {
  username: string;
  password: string;
}): Promise<IUserWithToken> {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}

const authService = { login };

export default authService;
