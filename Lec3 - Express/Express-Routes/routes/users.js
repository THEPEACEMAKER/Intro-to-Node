const express = require("express");
let router = express.Router();

router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

router
  .route("/cars")
  .get((req, res) => {
    ///users/cars
    res.send("hi get /users/cars for the logged in user");
  })
  .post((req, res) => {
    res.send("hi post /users/cars for the logged in user");
  });

router
  .route("/cars/:carid")
  .get((req, res) => {
    res.send(
      "hi get /users/cars/" + req.params.carid + " for the logged in user"
    );
  })
  .put((req, res) => {
    res.send(
      "hi put /users/cars/" + req.params.carid + " for the logged in user"
    );
  });

module.exports = router;
