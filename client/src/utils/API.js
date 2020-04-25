import axios from 'axios';

export default {
  getBooks: (query) => {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
  },

  getBook: (id) => {
    return axios.get(`/api/books/${id}`);
  },

  deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
  },

  saveBook: (bookData) => {
    return axios.post(`/api/books`, bookData);
  },
};
