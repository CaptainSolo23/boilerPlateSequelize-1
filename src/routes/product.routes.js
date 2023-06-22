const { Router } = require("express"); //traemos nuestro router
const router = Router(); // lo inicializamos
const { Product, Category } = require("../db");

/* Ruta para traerme todos los productos */
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll();


    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
/* Ruta para traerme un producto */
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);
    const product = await Product.findByPk(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
/* Ruta para crear un producto */
router.post("/", async (req, res) => {
  try {
    const { title, description, price, stock, image, category } = req.body;
    const categoryAdd = await Category.findOne({ where: { name: category } });

    const newProduct = await Product.findOrCreate({
      title,
      description,
      price,
      stock,
      image,
    });
    // await categoryAdd.addProduct(newProduct);
    res.status(200).json("Producto creado correctamente");
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
/* Ruta para editar un producto */
router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    Product.update(data, { where: { id: id } });
    res.status(200).json("Producto Actualizado correctamente");
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
