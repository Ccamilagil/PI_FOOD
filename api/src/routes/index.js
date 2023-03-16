const { Router } = require('express');
const axios = require("axios");//importo axios
const { Recipe, Diets, recipes_diets } = require("../db")//Me traigo mis tablas y mi tabla intermedia
require('dotenv').config();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Op } = require("sequelize")//me trigo Op de sequelize que tiene varios metodos, operadores de sequelize

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => { //me traigo la info que necesito desde la api
    const apiUrl = await axios.get('https://api.spoonacular.com/recipes/complexSearch');
    const apiInfo = await apiUrl.data.map(el => {
        return {
            title: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            instructions: recipe.analyzedInstructions[0].steps.map(step => step.step)
        };
    });
    return apiInfo;
};

const getDbInfo = async () => { //me traigo las recetas de la bd
    return await Recipe.findAll({
        include:{ //e incluyo el modelo diets
            model: Diets,
            attributes: ['name'], //con el atibuto name
            through: { //mediante los atributos
                attributes: [],
            },
        }
    })
}

const getAllCharacters = async () =>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

//repaso selene 41:14

module.exports = router;
