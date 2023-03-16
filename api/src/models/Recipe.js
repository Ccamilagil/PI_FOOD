const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true, //no esta disponible para todas las recetas
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max:100,
      },
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdInDb: { // no me viene de la bd. Es para crear las recetas
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

  });
};
