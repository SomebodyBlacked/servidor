const express = require("express");
const app = express();

const port = process.env.PORT || process.argv[2] || 3000;

let users = [
  { id: 1, nombre: "Juan", edad: 30 },
  { id: 2, nombre: "Pedro", edad: 29 },
  { id: 3, nombre: "Carla", edad: 31 },
  { id: 4, nombre: "Maria", edad: 28 },
  { id: 5, nombre: "Carlos", edad: 32 },
  { id: 6, nombre: "Ana", edad: 27 },
  { id: 7, nombre: "Luis", edad: 33 },
  { id: 8, nombre: "Marta", edad: 26 },
  { id: 9, nombre: "Silvia", edad: 34 },
];

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
