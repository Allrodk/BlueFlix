const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
let message = "";
let titulo = "BlueFlix";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index",{titulo: titulo});
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/novo", (req, res) => {
  message = "Mensagem aqui";
  setTimeout(() => {
    message = "";
  }, 5000);

  //   const pokemon = req.body;
  //   pokedex.push(pokemon);
  res.redirect("/");
});

// app.get("/detalhes/:id", (req, res) => {
//   const id = req.params.id;
//   res.render("detalhes",);
// });

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
