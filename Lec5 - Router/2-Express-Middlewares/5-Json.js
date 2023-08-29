const express = require("express");
const app = express();

// Middleware to parse JSON data from the request body
app.use(express.json());

// Route handler for a POST request
app.post("/api/data", (req, res) => {
  console.log(req.body); // JSON data sent in the request body will be available here
  // Process the JSON data and send a response
  res.json({ message: "Data received successfully!" });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
