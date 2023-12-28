import axios from 'axios';

const baseUrl = "https://655ef5e2879575426b443c29.mockapi.io/api/users";

const req = {
  allUsers: async () => {
    try {
      const res = await axios.get(baseUrl);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        return req.allUsers(); 
      } else {
        throw error;
      }
    }
  },

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
