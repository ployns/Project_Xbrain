import axios from "axios";

// export const getUser = async () => {
//   return await axios.get("http://localhost:9090/api/posts", {

//   });
// };

export const login = async (value) => {
  return await axios.post("http://localhost:8080/api/login", value);
};

export const signUp = async (value) => {
  return await axios.post("http://localhost:8080/api/register", value);
};

// export const getUserById = async (id) => {
//   return await axios.get("http://localhost:8080/api/posts/" + id);
// };

export const getTutor = async (id) => {
  return await axios.get("http://localhost:8080/getTeacherById/" + id);
};

export const getStudent = async (id) => {
  return await axios.get("http://localhost:8080/getStudentById/" + id);
};

// TODO:
export const updateTutor = async (value) => {
  return await axios.put("http://localhost:8080/updateTeacher", value);
};

export const updateStudent = async (value) => {
  return await axios.put("http://localhost:8080/updateStudent", value);
};
