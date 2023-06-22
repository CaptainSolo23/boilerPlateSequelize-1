const express = require("express"); //importo express

require("./db.js");

const server = express(); //Guardamos express en una variable,puede llanarse app o server, o como quieras

server.name = "ecommerceApi"; //nombrar a mi servidor


server.get("/", (req,res)=>{

    res.status(200).send("Hola estas conectado correctamente")
})







module.exports = server;
