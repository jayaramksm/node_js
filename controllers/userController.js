const expressAsyncHandler = require("express-async-handler");
// expressAsyncHandler is used to insted of writting try catch this will acsess errors
const Users = require("../models/usersModel");

const getAllUsers = expressAsyncHandler(async (req, res) => {
    let userData = []
    userData = await Users.find();
    console.log("users==>", userData);
    res.status(200).json({ userData })
});
const getUserById = expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    let userData = []
    if (id) {
        userData = await Users.findById(id);
        if (!userData) {
            res.status(404);
            throw new Error("user not founf");
        }

    }
    res.status(200).json({ userData })
});
const createUsers = expressAsyncHandler(async (req, res) => {
    console.log("user_body==>", req.body);
    const { name, mail, age } = req.body
    if (!name || !mail) {
        res.status(400)
        // .json({ mag: 'bad request' })
        throw new Error("Bad request")
    }
    const user = await Users.create({
        name, mail, age
    })
    res.status(200).json({ message: " created users data", user: user })
});
const updateUsers = expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    if (id) {
        const userData = await Users.findById(id);
        console.log("userData==>", { userData, body: req.body })
        if (!userData) {
            res.status(404);
            throw new Error("user not founf");
        }

    }
    const updateUser = await Users.findByIdAndUpdate(
        id, req.body, { new: true }
    )
    res.status(200).json({ updateUser })
});
const deleteUsers = expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    let userData = []
    if (id) {
        // const userData = await Users.findById(id);
        userData = await Users.findByIdAndDelete(id);
        if (!userData) {
            res.status(404);
            throw new Error("user not founf");
        }

    }
    //    const responce =  await Users.findByIdAndDelete(id)
    // Delete by Other Fields
    // await User.deleteOne({ email: 'test@example.com' });
    res.status(200).json({ message: 'user removed successfully', userData })
});


module.exports = { getAllUsers, createUsers, updateUsers, deleteUsers, getUserById }