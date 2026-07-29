module.exports = app => {
    const proveedors = require("../controllers/proveedor.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", proveedors.create);
    // Retrieve all Client
    router.get("/", proveedors.findAll);
    // Retrieve all published Client
    router.get("/status", proveedors.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", proveedors.findOne);
    // Update a Client with id
    router.put("/update/:id", proveedors.update);
    // Delete a Client with id
    router.delete("/delete/:id", proveedors.delete);
    // Delete all Cliente
    router.delete("/delete/", proveedors.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/proveedors", router);
};