const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:8081"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

// Ruta principal
app.get("/", (req, res) => {
  res.json({ message: "UMG Web Application" });
});

require("./app/routes/cliente.routes")(app);
require("./app/routes/proveedor.routes")(app);
require("./app/routes/producto.routes")(app);

// Sincronizar la BD y luego iniciar el servidor
db.sequelize.sync()
  .then(() => {
    console.log("Base de datos sincronizada.");

    const PORT = process.env.PORT || 8081;
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error al sincronizar la base de datos:", err);
  });