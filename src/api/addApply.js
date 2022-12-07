import axios from "axios";

export const addApplyPost = async (student_id,value) => {
  return await axios.post("http://localhost:8080/createApplyPost/"+student_id,value)
};



export const test = async (student_id,value) => {
    return await axios.post("http://localhost:8080/testTong/"+student_id,value)
  };