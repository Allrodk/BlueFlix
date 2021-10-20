const Trailer = require("../models/listaTrailer");
const { sequelize } = require("../models/listaTrailer");
vazio = ["Teste"];
const cheio = vazio;
console.log(cheio);

module.exports = {
  home: async (req, res) => {
    await sequelize.sync();
    const trailer = await Trailer.findAll();
    res.render("../views/index", { catalogo: trailer, message });
  },

  cadastro: async (req, res) => {
    res.render("../views/cadastro", { message });
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

    if (
      titulo == "" ||
      ano == "" ||
      duracao == "" ||
      classificacao == "" ||
      categoria == "" ||
      atores == "" ||
      imagembg == "" ||
      thumb == "" ||
      video == ""
    ) {
      message = "Preencha todos os campos!";
      setTimeout(() => {
        message = "";
      }, 5000);
      res.render("../views/cadastro", { message });
    } else if (+ano != parseInt(ano) || +duracao != parseInt(duracao)) {
      message =
        "Os campos (Ano) e (Duração) devem ser preenchidos com números.";
      setTimeout(() => {
        message = "";
      }, 5000);
      res.render("../views/cadastro", { message });
    } else if (
      (imagembg.search("http://") == -1) &
        (imagembg.search("https://") == -1) ||
      (thumb.search("http://") == -1) & (thumb.search("https://") == -1)
    ) {
      message =
        "Os campos (Imagem de fundo) e (Miniatura) devem conter urls válidas.";
      setTimeout(() => {
        message = "";
      }, 5000);
      res.render("../views/cadastro", { message });
    } else {
      message = `✔ ${titulo} adicionado ao Catálogo.`;
      setTimeout(() => {
        message = "";
      }, 5000);

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
    }
  },

  detalhes: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    res.render("../views/detalhes", { trailer: trailer, message });
  },

  getEditar: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    res.render("../views/editar", { trailer: trailer, message });
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
    message = `✔ ${titulo} Modificado com Sucesso.`;
    setTimeout(() => {
      message = "";
    }, 5000);
    res.redirect("/");
  },

  deletar: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    if (!trailer) {
      message = "Filme não encontrado.";
      setTimeout(() => {
        message = "";
      }, 5000);
      res.render("../views/detalhes", { message });
    } else {
      message = `✔ ${trailer.titulo} deletado com Sucesso.`;
      setTimeout(() => {
        message = "";
      }, 5000);
      await trailer.destroy();
      res.redirect("/");
    }
  },
};
