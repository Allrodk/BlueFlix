const Trailer = require("../models/listaTrailer");
const { sequelize } = require("../models/listaTrailer");
let message = "";
let listaCategoria = [""];

async function lista() {
  await sequelize.sync();
  const trailer = await Trailer.findAll();

  trailer.forEach((elemento) => {
    let chave = 0;
    for (let i = 0; i < listaCategoria.length; i++) {
      if (listaCategoria[i] == elemento.categoria) {
        chave = 1;
        break;
      }
    }
    if (chave == 0) {
      listaCategoria.push(elemento.categoria);
    }
  });
  listaCategoria.splice(0, 1);
  console.log(listaCategoria);
}
lista();

module.exports = {
  home: async (req, res) => {
    await sequelize.sync();
    const trailer = await Trailer.findAll();
    res.render("../views/index", { catalogo: trailer, message, listaCategoria });
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
    message = `✔ ${titulo} Adicionado ao Catálogo.`;
    setTimeout(() => {
      message = "";
    }, 5000);
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
    message = `✔ ${titulo} Modificado com Sucesso.`;
    setTimeout(() => {
      message = "";
    }, 5000);
    res.redirect("/");
  },

  deletar: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    await trailer.destroy();
    message = `✔ ${trailer.titulo} Deletado com Sucesso.`;
    setTimeout(() => {
      message = "";
    }, 5000);
    res.redirect("/");
  },
};
