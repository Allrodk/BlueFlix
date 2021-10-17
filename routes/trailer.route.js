const express = require("express");
const router = express.Router();

const controller = require("../controllers/trailer.controller");

//Rotas
router.get("/", controller.home);
router.get("/cadastro", controller.cadastro);
router.post("/novo", controller.novo);
router.get("/detalhes/:id", controller.detalhes);
router.get("/nav", controller.nav);
router.get("/editar/:id", controller.getEditar);
router.post("/editar/:id", controller.postEditar);
router.get("/deletarTrailer/:id", controller.deletar);
module.exports = router;
