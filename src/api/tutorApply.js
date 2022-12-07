import axios from "axios";

export const listApplyTeacher = async (teacher_id) => {
  return await axios.get(
    "http://localhost:8080/getTeacherApplyPost/" + teacher_id
  );
};
