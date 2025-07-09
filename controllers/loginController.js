const expressAsyncHandler = require("express-async-handler")
const loginScheme = require("../models/loginModel");
const bycrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = expressAsyncHandler(async (req, res) => {
    const { mail, password } = req.body;
    
    if (!mail || !password) {
        res.status(400).json({ message: 'All fields are mandatary' });
        throw new Error("All fields are mandatary");
    };
    const userAvailabule = await loginScheme.findOne({ mail });

    if (!userAvailabule) {
        res.status(400).json({ message: 'User not exist' });
        throw new Error("User not exist");
    }
    if (userAvailabule && await bycrypt.compare(password,userAvailabule.password)) {
                console.log("request==>", userAvailabule,  process.env.ACCESS_TOKEN );

        const userDetails = {
            userName: userAvailabule.userName,
            mail: userAvailabule.mail,
            role: userAvailabule.role,
            id: userAvailabule.id
        }
        const accessToken =  await jwt.sign({
            user:userDetails,
        }, "jayaram_369", {
            expiresIn: '30m'
        });
        res.status(200).json({ message: 'user login successfully...', accessToken, userDetails })

    }
})
const rigister = expressAsyncHandler(async (req, res) => {
    const { userName, mail, password, role } = req.body;
    if (!userName || !mail || !password || !role) {
        res.status(400).json({ message: 'All fields are mandatary' });
        throw new Error("All fields are mandatary");
    };
    const userAvailabule = await loginScheme.findOne({ mail });
    if (userAvailabule) {
        res.status(400).json({ message: 'User alredy availabule' });
        throw new Error("User alredy availabule");
    }
    const hashPassword = await bycrypt.hash(password, 10);
    const user = await loginScheme.create({ userName, mail,role, password: hashPassword })
    res.status(200).json({ message: 'Registerd successfuly', id: user.id })
});

const userDetails = expressAsyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

module.exports = { login, rigister, userDetails }