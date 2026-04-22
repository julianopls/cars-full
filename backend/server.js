const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let carros = [];


app.get("/carros", (req, res) => {
  res.json(carros);
});


app.post("/carros", (req, res) => {
  const carro = req.body;
  carros.push(carro);
  res.json({ mensagem: "Carro adicionado!" });
});


app.delete("/carros/:index", (req, res) => {
  const index = req.params.index;
  carros.splice(index, 1);
  res.json({ mensagem: "Removido!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});