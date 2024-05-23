const express = require("express");
const app = express();

const port = process.env.PORT || process.argv[2] || 3000;

app.get("/", (req, res) => {
    res.json("Hola mundo");
});

app.get("/users", (req, res) => {
    let users = [
        { nombre: "Juan", edad: 30 },
        { nombre: "Pedro", edad: 29 },
        { nombre: "Carla", edad: 31 }
    ]
    res.json(users);
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}/`);
});
