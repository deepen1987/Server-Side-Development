import express from "express";

const router = express.Router();

// the value specified in the url not as a query param but a params.
router.get("/:id", (req, res) => {
    if(req.params.id){
        console.log("logged");
        res.status(200).send("thanks");

    }
})

export default router;