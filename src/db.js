require("dotenv").config(); //AQUI HABILITO A LEER UN ARCHVO .ENV
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env; //DESTRUCTURING  process.env.DB_PASSWORD
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/ecommerce`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename); // para la ruta de archivos

const modelDefiners = []; //aca van a ser pusheados todos los models de la carpeta (tablas)

// Leemos todos los archivos "QUE SEAN .JS" de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
// Inyectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Category, Product } = sequelize.models;
// Aca vendrian las relaciones
Category.belongsToMany(Product, { through: "Category-Product-Cross" });


module.exports = {
  ...sequelize.models, // para poder importar los modelos en otros archivos seria  así: const { Product, Category } = require('./db.js');
  sequelize: sequelize, // para importart la conexión { sequelize } = require('./db.js');
};
