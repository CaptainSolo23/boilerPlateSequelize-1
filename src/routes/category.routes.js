const { Router } = require("express"); //traemos nuestro router
const router = Router(); // lo inicializamos
const { Category } = require("../db");

/* Ruta para traerme todas los categorias */
router.get("/", async (req, res) => {
  try {
    const allCategories = await Category.findAll();

    res.status(200).json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

/* Ruta para crear una categoria */
router.post("/", async (req, res) => {
  try {
    const categoryBody = req.body;
    await Category.create(categoryBody);
    res.status(200).json("Categoria creada correctamente");
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
