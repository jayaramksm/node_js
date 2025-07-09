const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"login"
    },
    name: {
        type: String,
        requires: [true, "Please add the name"]
    },
    mail: {
        type: String,
        requires: [true, "Please add the mail"],
        unique: true,
    },
    age: {
        type: Number,
        // requires:[true, "Please add the age"],
        default: 18
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("user", userScheme);