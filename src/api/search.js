import axios from "axios";

export const listSearch = async (values) => {
  return await axios.post("http://localhost:8080/search", values);
};

export const testSearch = async (val) => {
  return await axios.post("http://localhost:8080/test_search", {
    headers: { "Access-Control-Allow-Origin": "*" },
    data: val,
  });
};
