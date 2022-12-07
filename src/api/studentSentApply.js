import axios from "axios";

export const getTeacherPostById = async (post_id) => {
  return await axios.get("http://localhost:8080/getTeacherPost/" + post_id);
};
