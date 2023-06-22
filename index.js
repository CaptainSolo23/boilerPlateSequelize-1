//SERVIDOR BACKEND CON EXPRESS
require("dotenv").config(); //AQUI HABILITO A LEER UN ARCHVO .ENV
const { EXPRESS_PORT } = process.env; //DESTRUCTURING  process.env.DB_PASSWORD

const server = require("./src/server");
const { sequelize } = require("./src/db");

// Sincronizo todos los models de una sola vez
sequelize.sync({ force: false }).then(() => {
  server.listen(EXPRESS_PORT, () => {
    console.log(
      `Se inicio correctamente el servidor en el puerto: ${EXPRESS_PORT}`
    );
  }); //ESCUCHO EL SERVIDOR LOCALHOST EN EL PUERTO QUE PUSE
});
