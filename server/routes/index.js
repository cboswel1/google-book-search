const routes = require("./api");
const router = require("express").Router();

//route
router.use("/api", routes); 


module.exports = router;