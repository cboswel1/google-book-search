//API Key: AIzaSyBkq37SDDByJ0jRZPWSTkvEf_eKJ9TopWU

import axios from "axios";


export default {
    searchBooks: function(book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  }
};
