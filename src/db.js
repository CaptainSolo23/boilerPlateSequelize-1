require("dotenv").config(); //AQUI HABILITO A LEER UN ARCHVO .ENV
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env; //DESTRUCTURING

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/ecommerce`
);
