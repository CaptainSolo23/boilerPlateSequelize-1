const express = require("express"); //importo express
const server = express(); //Guardamos express en una variable,puede llanarse app o server, o como quieras
const routes = require("./routes/index.routes");
const bodyParser = require("body-parser");
require("./db.js");

server.name = "ecommerceApi"; //nombrar a mi servidor

//MIDLEWARE BODY PARSER
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));

//CONEXIÓN CON TODAS LAS RUTAS
server.use("/", routes);

//ESTO ES UN MIDLEWARE DE CACHEO DE ERRORES
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
