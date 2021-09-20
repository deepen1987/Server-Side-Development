import _m from "mongoose";
const { Mongoose } = _m;

const mongoose = new Mongoose();
mongoose.connect("mongodb://localhost/mongo-exercises")
    .then( ()=> console.log("Connected to MongoDB"))
    .catch( (err)=> console.error("Not able to connect MongoDB", err) );

const courseSchema = new mongoose.Schema({
    "_id": String,
    "tags": [ String ],
    "date": { type: Date, default: Date.now},
    "name": String,
    "author": String,
    "isPublished": Boolean,
    "price": Number
});

const Courses = mongoose.model("Course", courseSchema);

async function getCourses(){
    return await Courses
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

// run();

// Updating document with query first approach
// async function updateCourse(id){
//     const course = await Courses.findById(id);
//     if(!course){
//         console.log(course);
//          return
//         };

//     // one way of doing it
//     course.isPublished = false;
//     course.author = "Another autohor";
//     // second way of doing it
//     course.set({
//         isPublished: true,
//         author: "Another author"
//     });
//     const result = await course.save();
//     console.log(result);

// }


// async function updateCourse(id){
//     const result = await Courses.findByIdAndUpdate(id, {
//         $set:{
//             author: "Mosh",
//             isPublished: true
//         }
//     });
//     // const course = await Courses.findById(id);
//     // console.log(course);
//     console.log(result);
// }

async function removeCourse(id){
    const course = await Courses.findOneAndDelete( { _id: id}, { new: true });
    console.log(course);
}

removeCourse("5a68fe2142ae6a6482c4c9cb");