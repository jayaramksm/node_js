const expressAsyncHandler = require("express-async-handler")

const login  = expressAsyncHandler(async(req, res)=>{
res.status(200).json({message:'user...'})
})

module.exports = {login}