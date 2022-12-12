const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    img: {
      type: DataTypes.STRING,
    },
    health: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // unique: true,
    },
    attack: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // unique: true,
    },
    defense: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // unique: true,
    },
    velocity: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // unique: true,
    },
    height: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // unique: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // unique: true,
    },
    type: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      // unique: true,
    },
  });
};
