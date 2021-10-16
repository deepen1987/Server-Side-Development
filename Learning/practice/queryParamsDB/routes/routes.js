import express from "express";
import { User } from "../models/models.js";

const router = express.Router();

router.post("/user", async (req, res) => {
    let user = req.query;
    if(!user.name || !user.age || !user.sex){
        return res.status(404).send("Data not Found");
    };

    user = new User({
        name: user.name,
        age: user.age,
        sex: user.sex
    });
    await user.save();
    res.status(201).send("User Created");

})


export { router as queryRoutes };