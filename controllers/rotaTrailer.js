const express = require("express");
const router = express.Router();

const Trailer = require("../models/listaTrailer");
const message = "";

// Rota e Controller index
// const { sequelize } = require("../models/listaTrailer");
router.get("/", async (req, res) => {
  // await sequelize.sync({ force: true });
  const trailer = await Trailer.findAll();
  res.render("../views/index", { catalogo: trailer, message });
});

// Rota e Controller Cadastro
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
  await Trailer.create({
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
  res.redirect("/");
});

// Rota e Controller detalhes
router.get("/detalhes/:id", async (req, res) => {
  const trailer = await Trailer.findByPk(req.params.id);
  res.render("../views/detalhes", { trailer: trailer });
});

// Rota e Controller detalhes
router.get("categoria/:categoria", async (req, res) => {
  const trailer = await Trailer.findByPk(req.params.categoria);
  console.log(trailer);
  res.render("../views/categoria", { trailer: trailer });
});

// Rota e Controller editar
router.get("/editar/:id", async (req, res) => {
  const trailer = await Trailer.findByPk(req.params.id);
  res.render("../views/editar", { trailer: trailer });
});

router.post("/editar/:id", async (req, res) => {
  const trailer = await Trailer.findByPk(req.params.id);
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

  trailer.titulo = titulo;
  trailer.sinopse = sinopse;
  trailer.ano = ano;
  trailer.duracao = duracao;
  trailer.classificacao = classificacao;
  trailer.categoria = categoria;
  trailer.atores = atores;
  trailer.imagembg = imagembg;
  trailer.thumb = thumb;
  trailer.video = video;

  await trailer.save();
  res.redirect("/");
});

// Rota e Controller deletar
router.get("/deletarTrailer/:id", async (req, res) => {
  const trailer = await Trailer.findByPk(req.params.id);

  await trailer.destroy();

  res.redirect("/");
});

module.exports = router;
