const bookController = require("../../controllers/bookController");
const router = require("express").Router();

// api book/
router
  .route("/")
    .get(bookController.findAll)
    .post(bookController.create)
 

// /api/book/:id
// router.route("/:id")
//   .delete(bookController.delete);


module.exports = router;
