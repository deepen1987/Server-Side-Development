
import _m from "mongoose";
const { Mongoose } = _m;
const mongoose = new Mongoose();

mongoose.connect("mongodb://localhost/playground")
    .then( () => console.log("Connected to MongoDB..."))
    .catch( (err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: {
        type: Array,
        validate: {
            validator: function(v){
                return v && v.length > 0;
            },
            message: "A course should have atleast one tag"
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: { 
        type: Number,
        required: function () { return this.isPublished; }
    }
});

// it takes 2 arguments 
// 1. singular name of collection for which this model is for.
// 2. a schema that defines the shape of documents in this collection
const Course = mongoose.model("Course", courseSchema);

async function createCourse(){
    const course = new Course({
        name: "Angular course",
        author: "Mosh",
        tags: null,
        isPublished: true,
        price: 17
    });
    try{
        // await course.validate() -- This is used to validate the new instance of the course created above.
        const result = await course.save();
        console.log(result);
    }catch(ex){
        console.log(ex.message)
    }
}

createCourse();

async function getCourse(){
    const course =  await Course
        .find({ author: "Mosh", isPublished: true}) // we can add filters in the method or limit or sort
        .limit(2)
        .sort({name: 1})
        .select({name: 1, tags: 1});
    console.log(course);
}

// getCourse();

// Regular expression 

async function getCourseRegx(){
    const course = await Course
        .find({ author: /^mo/i})
        .count();
    console.log(course);
}

// getCourseRegx();