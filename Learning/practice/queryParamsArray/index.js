import express, { json } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import checkRoutes from "./routes/route.js"
config();

const app = express();
const url = `${process.env.DB}NewDatabase`;
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/api", checkRoutes)

mongoose.connect(url)
    .then( ()=> console.log(`Connected to ${url}`));

    app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});