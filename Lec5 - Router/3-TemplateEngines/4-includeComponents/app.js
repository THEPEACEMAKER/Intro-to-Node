const express = require("express");
const app = express();
const port = 3000;

// view engine setup
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/components", function (req, res) {
  res.render("content");
});

app.listen(port, () => {
  console.log("server listening on port " + port);
});
