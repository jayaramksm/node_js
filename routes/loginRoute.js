const express = require("express");
const { login, rigister, userDetails } = require("../controllers/loginController");
const validateToken = require("../middleware/validateTokenHandler");

const routes = express.Router();

routes.post('/login',login );
routes.post('/rigister',rigister );
routes.get('/userDetails',validateToken,userDetails );

module.exports = routes;