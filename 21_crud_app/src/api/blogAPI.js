import axios from 'axios';

const API_HOST ='http://localhost:8080';
const  REQUEST_URL = `${API_HOST}/blogs`;

export const getBlogList = async (parameters) => {
  const response = await axios.get(`${REQUEST_URL}`, {
    params:  parameters,
  });
  return response.data;
}