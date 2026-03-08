const express = require("express");
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Abhishek" },
  { id: 2, name: "Priya" }
];

// GET
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// POST
app.post("/users", (req, res) => {
  const newUser = req.body;
  if (!newUser.id || !newUser.name) {
    return res.status(400).json({ message: "Invalid user data" });
  }
  users.push(newUser);
  res.status(201).json({
    message: "User added successfully",
    data: newUser
  });
});

// PUT
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  res.status(200).json({
    message: "User updated successfully",
    data: user
  });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.status(200).json({ message: "User deleted successfully" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});