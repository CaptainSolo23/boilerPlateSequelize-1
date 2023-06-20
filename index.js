//SERVIDOR BACKEND CON EXPRESS
const express = require("express"); //importo express
const PORT = 3000; //variable del puerto, donde queremos que se abra, se suele poner en mayuscula, o como quieras

const server = express(); //Guardamos express en una variable,puede llanarse app o server, o como quieras

//CONECCION A BASE DE DATOS
const { Pool } = require("pg"); //import Pool de pg
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvdrental",
  password: "1234",
  port: 5432, // Puerto por defecto de PostgreSQL
});

server.listen(PORT, () => {
  console.log(`Se inicio correctamente el servidor en el puerto: ${PORT}`);
}); //ESCUCHO EL SERVIDOR LOCALHOST EN EL PUERTO QUE PUSE

server.get("/welcome", (req, res) => {
  console.log("entre a la petición get de /saludo");
  try {
    console.log("estoy dentro del TRY");
    res.status(200).send("GET de prueba a / sola, BIENVENIDO!");
  } catch (error) {
    console.log("estoy dentro del CATCH", error);
    res.status(400).json("error en la ruta welcome");
  }
});

server.get("/films", (req, res) => {
  const order = req.query.order;

  let querySQL = `SELECT * FROM film ORDER BY film_id`;

  if (order) {
    querySQL = `SELECT * FROM film ORDER BY film_id ${order}`;
  }

  pool.query(querySQL, (error, result) => {
    if (error) {
      res.status(500).send("error al conectar o enviar la petición:", error);
    } else {
      res.status(200).json(result.rows);
    }
  });
});

server.get("/films/:id", (req, res) => {
  const film_id = parseInt(req.params.id);

  let querySQL = `SELECT * FROM film WHERE film_id = ${film_id}`;

  pool.query(querySQL, (error, result) => {
    if (error) {
      res.status(500).send("error al conectar o enviar la petición:", error);
    } else {
      res.status(200).json(result.rows);
    }
  });
});
