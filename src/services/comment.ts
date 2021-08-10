import axios from "axios";

import { constructConfig } from "./utils";

const baseUrl = "/api/blogs";

async function create(
  blogId: string,
  newComment: ICreateComment,
  token: string,
) {
  const config = constructConfig(token);
  const response = await axios.post(
    `${baseUrl}/${blogId}/comments`,
    newComment,
    config,
  );
  return response.data;
}

const blogService = { create };

export default blogService;
