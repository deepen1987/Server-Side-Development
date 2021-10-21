import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const user = ["deep", "neha", "andrew"]

app.get("/query", (req, res)=>{
        console.log(user[parseInt(req.query.id) - 1])
        res.send({
            user: user[parseInt(req.query.id) - 1]
        })
});

app.get("/params/:id", (req, res) =>{
    console.log(user[parseInt(req.params.id) - 1])
    res.send({
        user: user[parseInt(req.params.id) - 1]
    })
});

    app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});