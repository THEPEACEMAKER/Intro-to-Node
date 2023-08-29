const express = require("express");
const app = express();
const port = 3000;

// view engine setup
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/dynamic_view", function (req, res) {
  res.render("dynamic", {
    name: "Gomycode",
    url: "http://www.tutorialspoint.com",
  });
});

app.listen(port, () => {
  console.log("server listening on port " + port);
});
