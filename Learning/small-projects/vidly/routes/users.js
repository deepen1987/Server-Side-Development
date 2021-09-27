// With this API we will create a new user, from client this will be called from registration page.

const auth = require("../middleware/auth.js")
const bcrypt = require("bcrypt");
const _ = require("lodash"); // by convention this is stored in _
const { User, validateUser} = require("../models/user.js");
const express = require("express");
const mongoose = require("mongoose");
const { JsonWebTokenError } = require("jsonwebtoken");
const router = express.Router();

// Getting a user
router.get("/me", auth, async (req, res) =>{
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
})

// Registering a User
router.post("/", async (req, res) =>{
    const { error } = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send("A user already Registered with this email.")

    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password =  await bcrypt.hash(user.password, salt)
    await user.save();
   
    const token = user.generateAuthToken();
    res
        .header("x-auth-token", token)
        .send( _.pick(user, ["_id", "name", "email"]));
}); 

module.exports = router;