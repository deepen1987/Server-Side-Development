
import _m from "mongoose";
const { Mongoose } = _m;
const mongoose = new Mongoose();

mongoose.connect("mongodb://localhost/playground")
    .then( () => console.log("Connected to MongoDB..."))
    .catch( (err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// it takes 2 arguments 
// 1. singular name of collection for which this model is for.
// 2. a schema that defines the shape of documents in this collection
const Course = mongoose.model("Course", courseSchema);

async function createCourse(){
    const course = new Course({
        name: "Angular course",
        author: "Mosh",
        tags: ["angular", "frontend"],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

// createCourse();

async function getCourse(){
    const course =  await Course
        .find({ author: "Mosh", isPublished: true}) // we can add filters in the method or limit or sort
        .limit(2)
        .sort({name: 1})
        .select({name: 1, tags: 1});
    console.log(course);
}

getCourse();