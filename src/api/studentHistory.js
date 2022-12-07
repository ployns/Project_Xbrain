import axios from "axios";

export const listApplyPostStudent = async (student_id) => {
  return await axios.get(
    "http://localhost:8080/getStudentApplyPost/" + student_id
  );
};
