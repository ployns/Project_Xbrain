import axios from "axios";

export const createTeacherPost = async (teacher_id, values) => {
    return await axios.post("http://localhost:8080/addTeacherPost/"+teacher_id,values)
  };