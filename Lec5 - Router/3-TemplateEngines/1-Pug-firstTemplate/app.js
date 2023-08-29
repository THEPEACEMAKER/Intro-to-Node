const express = require("express");
const app = express();
const port = 3000;

// view engine setup
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/first_template", function (req, res) {
  res.render("first_view");
});

app.listen(port, () => {
  console.log("server listening on port " + port);
});
