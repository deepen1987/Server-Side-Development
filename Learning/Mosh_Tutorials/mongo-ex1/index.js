import { runMain } from "module";
import _m  from "mongoose";
const { Mongoose } = _m;

const mongoose = new Mongoose();

mongoose.connect("mongodb://localhost/mongo-exercises")
    .then( () => console.log("Connected to MongoDB"))
    .catch( (err) => console.error("Could not connect to MongoDB", err))

const courseSchema = new mongoose.Schema({
    "tags": [ String ],
    "date": { type: Date, default: Date.now},
    "name": String,
    "author": String,
    "isPublished": Boolean
});

const Courses = mongoose.model("Courses", courseSchema);

async function getCourses(){
    return await Courses
        .find({ tags: /^backend/i, isPublished: true})
        .sort({ name: 1})
        .select({ name: 1, author: 1})
};

async function run(){
    const course = await getCourses();
    console.log(course);
}

run();
