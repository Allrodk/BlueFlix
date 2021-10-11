const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
let message = "";
const titulo = "BlueFlix";
let catalogo = [
  {
    titulo: "teste",
    imagem:
      "https://occ-0-1313-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSAvZbGqC8L4WRNCcNdjXPb9wiFCtqFzrtmKd2Molz-LXOdb4Gl42KvH3bfENEas7_vdXApaFS5uQWuLgzxoiKtxkgd9.webp?r=ae9",
    sinopse: "teste",
    ano: 2021,
    duracao: 100,
    classificacao: "Livre",
    categoria: "Comédia",
    elenco_principal: "teste,teste2,teste3",
    diretor: "teste",
  },
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index", { titulo: titulo, catalogo: catalogo, message });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/novo", (req, res) => {
  message = "Novo trailler cadastrado!";
  setTimeout(() => {
    message = "";
  }, 5000);

  const filme = req.body;
  catalogo.push(filme);
  res.redirect("/");
});

// app.get("/detalhes/:id", (req, res) => {
//   const id = req.params.id;
//   res.render("detalhes",);
// });

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
