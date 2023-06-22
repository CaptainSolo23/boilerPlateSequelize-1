const express = require("express"); //importo express

require("./db.js");

const server = express(); //Guardamos express en una variable,puede llanarse app o server, o como quieras

server.name = "ecommerceApi"; //nombrar a mi servidor


server.get("/", (req,res)=>{

    res.status(200).send("Hola estas conectado correctamente")
})




server.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });


module.exports = server;
