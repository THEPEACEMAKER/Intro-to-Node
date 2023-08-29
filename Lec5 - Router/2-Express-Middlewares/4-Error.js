const express = require("express");
const app = express();
const port = 3000;

// Route handler for a POST request
app.post("/api/data", (req, res) => {
  // Simulating an error for demonstration purposes
  const randomError = Math.random() > 0.5;
  if (randomError) {
    throw new Error("Something went wrong!"); // Simulated error
  }

  res.send("Data received successfully!");
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong on the server!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
