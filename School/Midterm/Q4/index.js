import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res)=>{
    const user = req.query.user;
    const port = req.query.port
    console.log(`User: ${user} Port: ${port}`);

    res.send(user);
})



    app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});