const express = require("express");
const router = express.Router();
const users = require("../data/users");

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// POST a new user
router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (Update user)
router.put("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// DELETE a user
router.delete("/:id", (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
