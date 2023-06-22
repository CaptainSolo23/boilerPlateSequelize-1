const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: "No hay descripcion",
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
    },
    { timestamps: false }
  );
};
