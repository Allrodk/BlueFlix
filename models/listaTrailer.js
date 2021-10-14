const { Sequelize, DataTypes } = require("sequelize");
const database = require("./database");

const Trailer = database.sequelize.define(
  "trailer",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: { type: Sequelize.STRING, allowNull: false },
    sinopse: { type: Sequelize.STRING, allowNull: true },
    ano: { type: Sequelize.INTEGER, allowNull: false },
    duracao: { type: Sequelize.INTEGER, allowNull: false },
    classificacao: { type: Sequelize.STRING, allowNull: false },
    categoria: { type: Sequelize.STRING, allowNull: false },
    atores: { type: Sequelize.STRING, allowNull: false },
    imagembg: { type: Sequelize.STRING, allowNull: false },
    thumb: { type: Sequelize.STRING, allowNull: false },
    video: { type: Sequelize.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = Trailer;