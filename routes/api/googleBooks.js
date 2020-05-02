const router = require("express").Router();
const googleBooksController = require("../../controllers/googleBooksController");

router
  .route("/")
  .get(googleBooksController.findAll);

module.exports = router;