const express = require("express");
const app = express();

const port = process.env.PORT || process.argv[2] || 3000;

const users = require("./users.json");

app.get("/", (req, res) => {
  res.json("Hola mundo");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
  } else {
    res.json(user);
  }
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}/`);
});
