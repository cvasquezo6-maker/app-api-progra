// Importamos los modelos
const db = require("../models");
const Producto = db.productos;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo producto
exports.create = (req, res) => {

    // Validar datos
    if (!req.body.nombre || req.body.precio == null || req.body.stock == null) {
        res.status(400).send({
            message: "Los campos nombre, precio y stock son obligatorios."
        });
        return;
    }

    // Crear objeto producto
    const producto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    };

    // Guardar en la base de datos
    Producto.create(producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el producto."
            });
        });
};

// Obtener todos los productos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;

    const condition = nombre
        ? { nombre: { [Op.iLike]: `%${nombre}%` } }
        : null;

    Producto.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al obtener los productos."
            });
        });
};

// Obtener un producto por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Producto.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el producto con id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el producto con id=" + id
            });
        });
};

// Actualizar un producto
exports.update = (req, res) => {
    const id = req.params.id;

    Producto.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1 || num[0] == 1) {
                res.send({
                    message: "Producto actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el producto con id=${id}. Verifique que exista o que envió datos.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el producto con id=" + id
            });
        });
};

// Eliminar un producto
exports.delete = (req, res) => {
    const id = req.params.id;

    Producto.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Producto eliminado correctamente."
                });
            } else {
                res.send({
                    message: `No se encontró el producto con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el producto con id=" + id
            });
        });
};

// Eliminar todos los productos
exports.deleteAll = (req, res) => {
    Producto.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({
                message: `${nums} productos eliminados correctamente.`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al eliminar los productos."
            });
        });
};