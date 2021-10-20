const Trailer = require("../models/listaTrailer");
const { sequelize } = require("../models/listaTrailer");
let message = "";
let listaCategoria = [];

async function lista(trailer) {
  listaCategoria = [];
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
  //Ordem alfabetica
  if (listaCategoria.length > 1) {
    listaCategoria.forEach((el, index) => {
      for (let i = index + 1; i < listaCategoria.length; i++) {
        if (listaCategoria[index] > listaCategoria[i]) {
          listaCategoria.splice(index, 0, listaCategoria[i]);
          listaCategoria.splice(i + 1, 1);
        }
      }
    });
  }
  //----------------
}

async function validacao(trailerNew) {
  const anoAtual = new Date().getFullYear();
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
  } = trailerNew;
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
  } else if (ano.length != 4) {
    message = `O Ano deve conter 4 digitos e ser anterior à ${anoAtual}`;
  } else if (+ano != parseInt(ano) || +duracao != parseInt(duracao)) {
    message = "Os campos (Ano) e (Duração) devem ser preenchidos com números.";
  } else if (
    (imagembg.search("http://") == -1) & (imagembg.search("https://") == -1) ||
    (thumb.search("http://") == -1) & (thumb.search("https://") == -1)
  ) {
    message =
      "Os campos (Imagem de fundo) e (Miniatura) devem conter urls válidas.";
  } else if (
    (video.search("http://") == -1) & (video.search("https://") == -1) ||
    (video.search("youtube") == -1) & (video.search("youtu.be") == -1)
  ) {
    message = "O campo URL do Trailer deve conter link do Youtube válido.";
  }
  return message;
}

module.exports = {
  home: async (req, res) => {
    await sequelize.sync();
    const trailer = await Trailer.findAll();
    await lista(trailer);
    res.render("../views/index", {
      trailer: trailer,
      message,
      listaCategoria,
    });
  },

  categorias: async (req, res) => {
    const trailer = await Trailer.findAll({
      where: { categoria: req.params.id },
    });

    res.render("../views/index", {
      trailer: trailer,
      listaCategoria,
      message,
    });
  },

  cadastro: async (req, res) => {
    trailerNew = {
      titulo: "",
      sinopse: "",
      ano: "",
      duracao: "",
      classificacao: "",
      categoria: "",
      atores: "",
      imagembg: "",
      thumb: "",
      video: "",
    };
    res.render("../views/cadastro", {
      trailerNew: trailerNew,
      listaCategoria,
      message,
    });
  },

  novo: async (req, res) => {
    trailerNew = req.body;
    await validacao(trailerNew);

    if (message != "") {
      setTimeout(() => {
        message = "";
      }, 5000);

      res.render("../views/cadastro", {
        trailerNew: trailerNew,
        message,
        listaCategoria,
      });
    } else {
      message = `✔ ${trailerNew.titulo} adicionado ao Catálogo.`;
      setTimeout(() => {
        message = "";
      }, 5000);

      await Trailer.create({
        titulo: trailerNew.titulo,
        sinopse: trailerNew.sinopse,
        ano: trailerNew.ano,
        duracao: trailerNew.duracao,
        classificacao: trailerNew.classificacao,
        categoria: trailerNew.categoria,
        atores: trailerNew.atores,
        imagembg: trailerNew.imagembg,
        thumb: trailerNew.thumb,
        video: trailerNew.video,
      });

      res.redirect("/");
    }
  },

  detalhes: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    res.render("../views/detalhes", {
      trailer: trailer,
      listaCategoria,
      message,
    });
  },

  getEditar: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    res.render("../views/editar", {
      trailer: trailer,
      listaCategoria,
      message,
    });
  },

  postEditar: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);

    trailerNew = req.body;
    await validacao(trailerNew);

    if (message != "") {
      setTimeout(() => {
        message = "";
      }, 5000);

      res.render("../views/editar", {
        trailer: trailerNew,
        message,
        listaCategoria,
      });
    } else {
      trailer.titulo = trailerNew.titulo;
      trailer.sinopse = trailerNew.sinopse;
      trailer.ano = trailerNew.ano;
      trailer.duracao = trailerNew.duracao;
      trailer.classificacao = trailerNew.classificacao;
      trailer.categoria = trailerNew.categoria;
      trailer.atores = trailerNew.atores;
      trailer.imagembg = trailerNew.imagembg;
      trailer.thumb = trailerNew.thumb;
      trailer.video = trailerNew.video;

      await trailer.save();
      message = `✔ ${trailerNew.titulo} Modificado com Sucesso.`;
      setTimeout(() => {
        message = "";
      }, 5000);
      res.redirect("/");
    }
  },

  deletar: async (req, res) => {
    const trailer = await Trailer.findByPk(req.params.id);
    if (!trailer) {
      message = "Filme não encontrado.";
      setTimeout(() => {
        message = "";
      }, 5000);
      res.render("../views/detalhes", { message, listaCategoria });
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
