require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Node.js backend is running");
});

// Example API for contact form
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received:", req.body);

  res.json({ success: true, msg: "Message received" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
