import express from "express";
const router = express.Router();

const courses = [];
router.post("/", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.status(200).send(courses)
});

export {router as exampleRoute};