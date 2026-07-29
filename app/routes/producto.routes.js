module.exports = app => {
    const productos = require("../controllers/producto.controller.js");
    var router = require("express").Router();

    // Crear un nuevo producto
    router.post("/create/", productos.create);

    // Obtener todos los productos
    router.get("/", productos.findAll);

    // Obtener un producto por ID
    router.get("/:id", productos.findOne);

    // Actualizar un producto por ID
    router.put("/update/:id", productos.update);

    // Eliminar un producto por ID
    router.delete("/delete/:id", productos.delete);

    // Eliminar todos los productos
    router.delete("/delete/", productos.deleteAll);

    // Endpoint principal
    // Ejemplo: http://localhost:8081/api/product/
    app.use("/api/product", router);
};