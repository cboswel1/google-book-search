import axios from "axios";

//search, save
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  searchBooks: function (book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  },
  //save
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //find
  savedBooks: function () {
    return axios.get("/api/books");
  },
  //delete
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
