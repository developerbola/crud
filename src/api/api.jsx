import axios from 'axios';

const baseUrl = "https://655ef5e2879575426b443c29.mockapi.io/api/users";

const req = {

  sendPost: (params) => {
    axios.post(baseUrl, params);
  },

  deletePost: (id) => {
    axios.delete(`${baseUrl}/${id}`);
  },

  editPost: (id, params) => {
    axios.put(`${baseUrl}/${id}`, params);
  },
};

export default req;
