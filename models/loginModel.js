const mongoose = require("mongoose");


const loginScheme = mongoose.Schema({
    userName: {
        type: String,
        requires: [true, "Please add the name"]
    },
    mail: {
        type: String,
        requires: [true, "Please add the mail"],
        unique: true,
    },
    password: {
        type: String,
        requires: [true, "Please add the password"],
    },
    role: {
        type: String,
        requires:[true, "Please add the role"],
        default: "user"
    }
}, {
    Timestamp: true
});

module.exports = mongoose.model("login", loginScheme)