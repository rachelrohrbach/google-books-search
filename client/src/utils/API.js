import axios from 'axios';

export default {
  getBooks: function (query) {
    return axios.get(`/api/googleBooks`, { params: { q: query } });
  },

  getSavedBooks: function () {
    return axios.get('/api/books');
  },

  getBook: function (id) {
    return axios.get(`/api/books/${id}`);
  },

  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },

  saveBook: function (bookData) {
    return axios.post(`/api/books`, bookData);
  },
};
