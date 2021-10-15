const express = require("express");
const router = express.Router();
const Trailer = require("../models/listaTrailer");

const message = "";

// Lista todos os itens do DB
// router.get("/", async (req, res) => {
//   const trailer = await Trailer.findAll();
//   res.render("../views/index", { catalogo: trailer });
// });

// const { sequelize } = require("./models/listaTrailer");

router.get("/", async (req, res) => {
  // await sequelize.sync({force: true})
  const trailer = await Trailer.findAll();
  res.render("../views/index", { catalogo: trailer, message });
});

// router.get("/criarProduto", async (req, res) => {
//   res.render("../views/criarProduto");
// });

// router.post("/novo", async (req, res) => {
//   const { nome, peso, valor } = req.body;
//   await Produto.create({
//     nome: nome,
//     peso: peso,
//     valor: valor,
//   });
//   res.redirect("/produto");
// });

// router.get("/editarProduto/:id", async (req, res) => {
//   const produto = await Produto.findByPk(req.params.id);
//   res.render("../views/editarProduto", { produto: produto });
// });

// router.post("/editarProduto/:id", async (req, res) => {
//   const produto = await Produto.findByPk(req.params.id);
//   const { nome, peso, valor } = req.body;

//   produto.nome = nome;
//   produto.peso = peso;
//   produto.valor = valor;

//   await produto.save();
//   res.redirect("/produto");
// });

// router.get("/deletarProduto/:id", async (req, res) => {
//   const produto = await Produto.findByPk(req.params.id);

//   await produto.destroy();

//   res.redirect("/produto");
// });

module.exports = router;
