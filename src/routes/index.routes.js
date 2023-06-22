const { Router } = require("express"); //traemos nuestro router
const router = Router(); // lo inicializamos
const productRouter = require("./product.routes");
const categoryRouter = require("./category.routes");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res) => {
  res.send("GET de prueba / sola");
});

router.use("/products", productRouter);
router.use("/categories", categoryRouter);

module.exports = router;
