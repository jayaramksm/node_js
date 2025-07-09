const express = require("express");
const { getAllUsers, createUsers, updateUsers, deleteUsers, getUserById } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const roleBasedAuth = require("../middleware/roleBasedAuth");
const routes = express.Router();
routes.use(validateToken);
routes.get('/', roleBasedAuth("user", "admin", "superAdmin"), getAllUsers)
routes.get('/:id', roleBasedAuth("admin"), getUserById)
routes.post('/', roleBasedAuth("admin", "superAdmin"), createUsers);
routes.put('/:id', roleBasedAuth("admin", "superAdmin"), updateUsers);
routes.delete('/:id', roleBasedAuth("superAdmin"), deleteUsers);
// route.get('/',(req,res)=>{
// res.status(200).json({msg:"users data"})
// });

module.exports = routes;
