import mongoose from "mongoose";
import { readFile } from "fs/promises";

const config = JSON.parse(await readFile(
    new URL('./config/mongo-config.json', 
    import.meta.url)));
const connection = `mongodb://${config.host}:${config.dbPort}/${config.db}`;

export const db = mongoose.connect(connection).then( ()=> console.log("Connected to MongoDB..."));