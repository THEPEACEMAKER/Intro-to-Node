var express = require("express");
var router = express.Router();

// Middleware to check login credentials
function checkLogin(req, res, next) {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    // Store username in the session for subsequent requests
    req.username = username;
    next(); // Proceed to the next middleware or route handler
  } else {
    res.render("index", { error: true }); // Render the login page with an error message
  }
}

router.post("/login", checkLogin, (req, res) => {
  // const { username } = req.session;
  res.render("home", { username: req.username }); // Render the home page with the username
});

module.exports = router;
