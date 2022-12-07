import axios from "axios";

export const listPost = async () => {
  return await axios.get("http://localhost:8080/api/posts", {
    // get all post
    // headers: {
    //   Authorization: `Bearer ${authtoken}`,
    // },
  });
};

export const currentPost = async (id) => {
  return await axios.get("http://localhost:8080/api/posts/" + id);
};

export const createPost = async (value) => {
  return await axios.post("http://localhost:8080/api/users/post", value);
};

// export const updatePost = async (authtoken, value, valu , id) => {
//   return await axios.put("http://localhost:5000/posts/edit-post/" + id,

// };
