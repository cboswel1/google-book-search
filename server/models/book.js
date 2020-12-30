const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    // _id : String,
    title : String, 
    authors : [String], 
    description : String, 
    image : String,
    link : String
}); 

const Book = mongoose.model("Book", BookSchema); 

module.exports = Book;