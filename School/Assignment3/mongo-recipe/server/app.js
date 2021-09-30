import express from "express";
import { db } from "./db.js";
import { readFile } from "fs/promises";
import { router as recipeRoute } from "./routes/recipes.js";

const config = JSON.parse(await readFile(
    new URL('./config/mongo-config.json', 
    import.meta.url)));
const app = express();

app.use(express.json())
app.use("/recipes", recipeRoute);

const port = process.env.PORT || config.serverPort;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
