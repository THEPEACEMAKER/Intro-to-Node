const express = require("express");
const app = express();
const port = 4000;

app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
