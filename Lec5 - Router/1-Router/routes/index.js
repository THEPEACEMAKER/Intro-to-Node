const express = require("express");
let router = express.Router();

router.route("/cars").get((req, res) => {
  ///cars
  res.send("hi get all cars");
});

router.route("/cars/:carid").get((req, res) => {
  res.send("hi get /cars/" + req.params.carid);
});

module.exports = router;
