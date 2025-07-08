const express = require("express");
const { login } = require("../controllers/loginController");

const routes = express.Router();

routes.post('/',login );

module.exports = routes;