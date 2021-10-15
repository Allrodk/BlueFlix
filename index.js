const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const db = require("./models/database");
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/views/public")));
app.use(express.urlencoded({ extended: true }));
//----------------------------------------------------------

// Link com rotaTrailer
const rotaTrailer = require("./controllers/rotaTrailer");
app.use("/", rotaTrailer);

let message = "";

const Trailer = require("./models/listaTrailer");
const { sequelize } = require("./models/listaTrailer");

app.get("/", async (req, res) => {
  await sequelize.sync({force: true})
  const trailer = await Trailer.findAll();
  res.render("index", { catalogo: trailer, message });
});

db.conectado();
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
