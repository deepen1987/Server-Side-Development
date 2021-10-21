import express from "express";
import { User } from "../models/models.js";

const router = express.Router();

router.post("/user", async (req, res) => {
    let user = req.query;

    user = new User({
        username: user.username,
        email: user.email
    });
    await user.save();
    res.status(201).send("User Created");

})

router.get("/:id", async (req, res) => {
    
    const user = await User.findById(req.params.id);
    if(!user) return res.status(400).send("Bad request");

    res.send(user);
})


export { router as queryRoutes };