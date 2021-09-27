const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/user.js");
const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
const router = express.Router();

// post request for authentication
router.post("/", async (req, res) =>{
    const { error } = validate(req.body);
    if(error) return res.status(400).send("Invalid email or password");

    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Invalid email or password");

    const token = jwt.sign({ _id: user._id }, config.get("jwtPrivateKey"));
    res.send(token);
})

function validate(req){
    const schema = Joi.object({
        email: Joi.string().email().max(255).required(),
        password: Joi.string().min(8).max(255).required()
    });

    return schema.validate(req);
}

module.exports = router