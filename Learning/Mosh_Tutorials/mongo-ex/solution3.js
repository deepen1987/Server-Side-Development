import _m from "mongoose";
const { Mongoose } = _m;

const mongoose = new Mongoose();
mongoose.connect("mongodb://localhost/mongo-exercises")
    .then( ()=> console.log("Connected to MongoDB"))
    .catch( (err)=> console.error("Not able to connect MongoDB", err) );

const courseSchema = new mongoose.Schema({
    "tags": [ String ],
    "date": { type: Date, default: Date.now},
    "name": String,
    "author": String,
    "isPublished": Boolean,
    "price": Number
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses(){
    return await Course
        .find({ isPublished: true })
        .or([
            { price: { $gte: 15 } },
            { name: /.*by.*/i }
        ])
        .sort({ price: -1 })
        .select( { name: 1, author: 1, price: 1 } )
};

async function run(){
    const course = await getCourses();
    console.log(course);
}

run();