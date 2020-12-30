const { Book } = require("../models");
const router = require("express").Router();

// api book/
router
  .route("/")
  .get((req, res) => {
    Book.find(req.query)
      .then(data => {
        // console.log("Book GET");
        // console.log({ data });
        res.json({ data });
      })
      .catch(error => {
        res.json({ success: false });
      });
  })
  .post((req, res) => {
    Book.create(req.body)
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(error => {
        res.json({ success: false, error });
      });
  });

router.route("/:id").delete((req, res) => {
  console.log(req.params);

  Book.findByIdAndDelete(req.params.id)
    .then(data => {
      console.log({ data });
      res.json({ success: true });
    })
    .catch(error => {
      res.json({ success: false });
    });
});

module.exports = router;
