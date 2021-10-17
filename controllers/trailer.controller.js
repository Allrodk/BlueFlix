const Trailer = require("../models/listaTrailer");
const message = "";

// const { sequelize } = require("../models/listaTrailer");

module.exports = {
  home: async (req, res) => {
    // await sequelize.sync({ force: true });
    const trailer = await Trailer.findAll();
    res.render("../views/index", { catalogo: trailer, message });
  },
  cadastro: async (req, res) => {
    res.render("../views/cadastro");
  },
  novo: async (req, res) => {
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
  },
  detalhes: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    res.render("../views/detalhes", { trailer: trailer });
  },
  getEditar: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    res.render("../views/editar", { trailer: trailer });
  },
  postEditar: async (req, res) => {
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
  },
  deletar: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    await trailer.destroy();
    res.redirect("/");
  },
};
