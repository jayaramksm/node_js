const express = require("express");
const { getAllUsers, createUsers, updateUsers, deleteUsers, getUserById } = require("../controllers/userController");
const routes = express.Router();

routes.get('/', getAllUsers)
routes.get('/:id', getUserById)
routes.post('/', createUsers);
routes.put('/:id',updateUsers);
routes.delete('/:id',deleteUsers);
// route.get('/',(req,res)=>{
// res.status(200).json({msg:"users data"})
// });

module.exports = routes;
