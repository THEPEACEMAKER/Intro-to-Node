const express = require("express");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const app = express();
const port = 4000;

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get("*", function (req, res) {
  res.end("Not Found");
});

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
