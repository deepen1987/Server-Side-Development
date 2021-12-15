import exppress from "express";
import { readFile } from "fs/promises";

const router = exppress.Router();

router.get("/",readTextFile);



async function readTextFile(req, res, next){

    const testFile = await readFile('./index.txt')
    console.log(testFile.toString());
    res.status(200).send("File read successfully");
    next();
}

export default router;