const router = require("express").Router(); 
const books = require("./books.routes");


//use this api path. /api/book/
router.use("/api/books", books)

module.exports = router;