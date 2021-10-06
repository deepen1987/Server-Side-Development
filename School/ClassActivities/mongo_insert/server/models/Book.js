import { readFile } from 'fs/promises';
const dbConfig = JSON.parse(await readFile(new URL('../config/mongo_config.json', 
                                                   import.meta.url)));

const connection = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`;
import mongoose from "mongoose";
mongoose.connect(connection);

const Book = mongoose.model("Book", new mongoose.Schema({
    course_name:  {type: String},
    section_code: {type: String},
    professor:    {type: String},
    building:     {type: String},
    room:         {type: String},
    start_time:   {type: String},
    end_time:     {type: String}
}));

export { Book }