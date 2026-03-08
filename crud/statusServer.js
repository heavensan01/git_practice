const express = require("express");
const app = express();

// 200 OK
app.get("/success", (req, res) => {
  res.status(200).json({ message: "Everything fine" });
});

// 201 Created
app.get("/created", (req, res) => {
  res.status(201).json({ message: "User created" });
});

// 403 Forbidden
app.get("/forbidden", (req, res) => {
  res.status(403).json({ message: "You cannot access this resource" });
});

// 500 Internal Server Error
app.get("/error", (req, res) => {
  res.status(500).json({ message: "Something went wrong" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});