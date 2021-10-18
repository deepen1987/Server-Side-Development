import express from "express";
import fs from "fs";

const router = express.Router();

router.post("/", (req, res) => {

    const fileName = req.query.fileName;
    const path = `/Users/deependrashekhawat/Documents/GitHub/Server-Side-Development/Learning/practice/fileIO/${fileName}`;

    fs.exists(path, (e) => {
        if (!e) return res.status(404).send("File Not Found")
    });
    const data = JSON.stringify(req.body)

    fs.appendFile(path, data, 'utf-8', () => {
        res.status(200).send("Success");
    })

    fs.watch(path, () => {
        console.log("index changed...")
    })
})

export { router as routes };