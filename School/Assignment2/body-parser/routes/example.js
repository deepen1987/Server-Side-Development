import express from "express";
const router = express.Router();

router.get("/test", (req, resp) => {
    // work done here
    resp.status(200).send("this is not complete");
});

export {router as exampleRoute};