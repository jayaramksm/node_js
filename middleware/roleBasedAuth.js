const expressAsyncHandler = require("express-async-handler");

const roleBasedAuth = (...role) => expressAsyncHandler(async (req, res, next) => {
    console.log("roleBasedAuth==>role", req.user, role);
    
    if (!role.includes(req.user.role)) {
        res.status(403);
        throw new Error("Access denied");
    }
    next();
});

module.exports = roleBasedAuth;