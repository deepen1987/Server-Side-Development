import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const user = ["deep", "neha", "andrew"]

app.get("/:startingFrom/to/:goingTo/from/:startingDate/to/:endDate", (req, res)=>{
        const sF = req.params.startingFrom
        const gT = req.params.goingTo
        const sD = req.params.startingDate
        const eD = req.params.endDate

        console.log(`
        startingFrom: ${sF}
        goingTo: ${gT}
        startingDate: ${sD}
        endDate: ${eD}
        `)

        res.send("success");
});

    app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});