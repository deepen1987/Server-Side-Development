const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    email: {
        type: String,
        unique: true,
        required: true,
        max: 255
    },
    password: {
        type: String,
        min: 8,
        max: 1024, // As we will be hasing the passwords
        required: true
    }
});

userSchema.method("generateAuthToken", function(){
    const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
    return token;
});

const User = mongoose.model("User", userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().email().max(255).required(),
        password: Joi.string().min(8).max(255).required()
    });

    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;