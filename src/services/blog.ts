import axios from "axios";

const baseUrl = "/api/blogs";

function constructConfig(token: string) {
  return {
    headers: { Authorization: `bearer ${token}` },
  };
}

async function getAll(): Promise<IBlog[]> {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(newBlog: ICreateBlog, token: string) {
  const config = constructConfig(token);

  console.log(token, typeof token);
  const response = await axios.post(baseUrl, newBlog, config);
  return response.data;
}

async function updateLikes(blog: IUpdateBlog, token: string) {
  const config = constructConfig(token);

  const response = await axios.put(
    `${baseUrl}/${blog.id}`,
    { ...blog, likes: blog.likes + 1 },
    config,
  );

  return response.data;
}

async function update(newBlog: IUpdateBlog, token: string) {
  const config = constructConfig(token);

  const response = await axios.put(`${baseUrl}/${newBlog.id}`, newBlog, config);

  return response.data;
}

async function remove(id: string, token: string) {
  const config = constructConfig(token);

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
}

const blogService = { getAll, create, update, updateLikes, remove };

export default blogService;
