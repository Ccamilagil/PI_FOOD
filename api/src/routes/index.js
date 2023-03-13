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


module.exports = router;
