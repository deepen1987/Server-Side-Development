import express from "express";
import guidGen from "easy-guid-generator";

const router = express.Router();

router.get("/", (req, resp) => {
    const secure = {
        now: Date.now(),
        uid: req.query.uid || 1,
        tok: guidGen.generateGuid()
    }
    resp.status(200).json(secure);
});

router.get("/ping", (req, resp) => {
    resp.status(200).send("pong");
});

router.get("/google", (req, res) => {
    res.redirect('http://www.google.com');
});

router.get("/facebook", (req, res) => {
    res.redirect('http://www.facebook.com');
});

router.get("/json", (req, res) => {
    res.json({
        name: "James Bond",
        work: "Playing Casino"
    })
});

export {router as authRoutes};