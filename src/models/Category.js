const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Category",
    { name: { type: DataTypes.STRING } },
    { timestamps: false }
  );
};
