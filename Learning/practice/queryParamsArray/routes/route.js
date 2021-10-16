import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("logged");
    res.status(200).send("thanks")
})

export default router;