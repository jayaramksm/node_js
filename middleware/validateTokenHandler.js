

const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const validateToken = expressAsyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        console.log("token==>", token)
        jwt.verify(token, "jayaram_369", (err, decode) => {
            if (err) {
                res.status(401);
                throw new Error("user is not authorized");
            }
            console.log("decode==>", decode);
            req.user = decode.user;
            next();
        });
        if (!token) {
            res.status(401);
            throw new Error("user is not authorized");
        }
    }
});

module.exports = validateToken;