const { Sequelize, DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define("Product", {
    title: {
      type: DataTypes.STRING,
      defaultValue: "No tiene nombre",
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.REAL,
    },
    image: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.REAL,
    },
  });
};
