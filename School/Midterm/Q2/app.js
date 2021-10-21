import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import { queryRoutes } from "./routes/routes.js"
config();

const app = express();
const port = process.env.PORT;
const url = `${process.env.DB}User`;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())
app.use("/api", queryRoutes);



mongoose.connect(url)
    .then( () => console.log("Connected to MongoDB..."))
    .catch( (err) => console.log("Unable to connect to MongoDB..."))

app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});