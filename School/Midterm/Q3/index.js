import express from "express";
import { config } from "dotenv";
import { routesC } from "./routes/routes.js"
import cors from "cors";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routesC);



    app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});