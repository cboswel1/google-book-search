//API Key: AIzaSyBkq37SDDByJ0jRZPWSTkvEf_eKJ9TopWU

import axios from "axios";

//search, save
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchBooks: function(book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  }, 
    saveBook : function(bookData){
    return axios.post("/api/books", bookData);
    }
};
