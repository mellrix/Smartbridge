const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Welcome route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// User Routes
app.use("/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
