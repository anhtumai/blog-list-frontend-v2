import axios from "axios";

const baseUrl = "/api/login";

async function login(credentials: {
  username: string;
  password: string;
}): Promise<{ username: string; password: string; token: string }> {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}

const authService = { login };

export default authService;
