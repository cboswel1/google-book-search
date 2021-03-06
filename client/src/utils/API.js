import axios from "axios";

//search, save
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  searchBooks: function (book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  },
  
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id)
  },
};
