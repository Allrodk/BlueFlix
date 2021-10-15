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

router.get("/cadastro", async (req, res) => {
  res.render("../views/cadastro");
});

router.post("/novo", async (req, res) => {
  const {
    titulo,
    sinopse,
    ano,
    duracao,
    classificacao,
    categoria,
    atores,
    imagembg,
    thumb,
    video,
  } = req.body;
  await Produto.create({
    titulo: titulo,
    sinopse: sinopse,
    ano: ano,
    duracao: duracao,
    classificacao: classificacao,
    categoria: categoria,
    atores: atores,
    imagembg: imagembg,
    thumb: thumb,
    video: video,
  });
  res.redirect("/index");
});

router.get("/editar/:id", async (req, res) => {
  const trailer = await Trailer.findByPk(req.params.id);
  res.render("../views/editar", { trailer: trailer });
});

router.post("/editarProduto/:id", async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  const { nome, peso, valor } = req.body;

  produto.nome = nome;
  produto.peso = peso;
  produto.valor = valor;

  await produto.save();
  res.redirect("/produto");
});

// router.get("/deletarProduto/:id", async (req, res) => {
//   const produto = await Produto.findByPk(req.params.id);

//   await produto.destroy();

//   res.redirect("/produto");
// });

module.exports = router;
