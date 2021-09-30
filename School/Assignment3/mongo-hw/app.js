import mongoose from "mongoose";
import express from "express";
import { readFile } from 'fs/promises';
const config = JSON.parse(await readFile(
    new URL('./config/mongo-config.json', 
    import.meta.url)));
const app = express();

// Database connection
const connection = `mongodb://${config.host}:${config.dbPort}/${config.db}`;
mongoose.connect(connection)
    .then( ()=> console.log("Connected to MongoDB..."));

const Test = mongoose.model("Test", new mongoose.Schema({ name: String}));
 
const port = process.env.PORT || config.serverPort;
app.listen(port, ()=> console.log(`Listening on port ${port}`));
