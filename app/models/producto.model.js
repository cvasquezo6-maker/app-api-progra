// Utilizamos module.exports para exportar el modelo
module.exports = (sequelize, Sequelize) => {

    // Definimos la tabla "producto"
    const Producto = sequelize.define("producto", {

        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },

        precio: {
            type: Sequelize.FLOAT,
            allowNull: false
        },

        stock: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    });

    return Producto;
};