import axios from "axios";

const baseUrl = "/api/blogs";

let token: string | null = null;

function setToken(newToken: string | null) {
  token = newToken !== null ? `bearer ${newToken}` : null;
}

async function getAll(): Promise<IBlog[]> {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(newBlog: ICreateBlog) {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newBlog, config);
  return response.data;
}

async function updateLikes(blog: IUpdateBlog) {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.put(
    `${baseUrl}/${blog.id}`,
    { ...blog, likes: blog.likes + 1 },
    config,
  );

  return response.data;
}

async function update(newBlog: IUpdateBlog) {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.put(`${baseUrl}/${newBlog.id}`, newBlog, config);

  return response.data;
}

async function remove(id: string) {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
}

const blogService = { getAll, create, update, updateLikes, remove, setToken };

export default blogService;
