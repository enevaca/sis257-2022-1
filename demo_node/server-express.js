const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Hola desde Express");
});

app.post("/", (req, res) => {
  res.send("Hola desde Express POST");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://127.0.0.1:3000");
})
