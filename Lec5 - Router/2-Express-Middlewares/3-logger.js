const express = require("express");
const app = express();

// Middleware function to log request protocol
const logProtocol = function (req, res, next) {
  console.log("A request for things received at " + Date.now());
  next();
};

// Route handler that sends the response along with the middleware function
app.get("/things", logProtocol, function (req, res) {
  res.send("Things");
});

app.listen(3000);
