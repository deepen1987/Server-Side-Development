import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res)=>{
    const city = req.body.city;
    const state = req.body.state
    console.log(`city: ${city} state: ${state}`);

    res.send(city);
})



    app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});