const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");
const { Book } = require("../models");
const router = require("express").Router();

// api book/
router
  .route("/")
  .get((req, res) => {
    Book.find({})
      .then(data => {
        console.log("Book Get");
        console.log({ data });
        res.json({ success: true });
      })
      .catch(err => {
        console.log({ err });
        res.json({ success: false });
      });
  })
  .post((req, res) => {
    console.log({ reqBody: req.body });

    Book.create({
      title: req.body.title,
      authors: req.body.authors, 
      description: req.body.description, 
      image: req.body.image, 
      link: req.body.link
    })
      .then(data => {
        console.log({ data });
        res.json({ success: true });
      })
      .catch(err => {
        console.log({ err });
        res.json({ success: true });
      });
  });

// /api/book/:id
router.route("/:id").delete((req, res) => {
  console.log(req.params);

    Book 
        .findByIdAndDelete(req.params.id)
        .then(data => {
            console.log({data}); 
            res.json({ success: true})
        })
        .catch(err => {
            console.log({err})
            res.json({success: false})
        })
});

module.exports = router;
