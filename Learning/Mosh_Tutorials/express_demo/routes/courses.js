const Joi = require("joi");
const express = require("express");

const router = express.Router()

const courses = [
    {id: 1, name: "Course1"},
    {id: 2, name: "Course2"},
    {id: 3, name: "Course3"}
]

// ***** GET Request *****
router.get("/", (req,res) => {
    res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find( c => c.id === parseInt(req.params.id));
    //   Not Found code
  if(!course) res.status(404).send("Course with given ID not found.");
  res.send(course)
});


// ***** POST Request *****
router.post("/", (req, res) => {
    const { error } = validateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);
        // Bad Request code
        
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


// ***** PUT Request *****
router.put("/:id", (req, res) => {
    // Lookup the course
    // If not exists, return 404
        const course = courses.find( c => c.id === parseInt(req.params.id));
        if(!course) return res.status(404).send("Course with given ID not found.");

    // Validate
    // If invalid, return 400
        const { error } = validateCourse(req.body);

        if(error) return res.status(400).send(error.details[0].message);

    // update course
    // return updated course
        course.name = req.body.name;
        res.send(course);
})


// ***** Delete Request *****
router.delete("/:id", (req, res) => {
    // Lookup the course
    // If not exists, return 404
        const course = courses.find( c => c.id === parseInt(req.params.id));
        if(!course) return res.status(404).send("Course with given ID not found.");

    // Delete
    // return deleted course
        const index = courses.indexOf(course);
        courses.splice(index, 1);

        res.send(course);
});

function validateCourse(course){
    const schema = Joi.object({ name: Joi.string().min(3).required()});
    return schema.validate(course);
}

module.exports = router;