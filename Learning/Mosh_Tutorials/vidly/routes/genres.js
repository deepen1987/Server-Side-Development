const Joi = require ("joi");
const express = require("express");
const mongoose = require ("mongoose");

const router = express.Router();
const Genre = mongoose.model("Genre", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

//  ***** Get Request *****
router.get("/", async (req, res) => {
    const result = await getGenres();
    res.send(result);
})

router.get("/:id", async (req, res) => {
    const genre = await Genre
        .findById(req.params.id)
        .catch( () => null);

    if(!genre) res.status(404).send("Genre with given ID not found");
    res.send(genre);
});

//  ***** Post Request *****
router.post("/", async (req, res) => {
    const { error } = validateGenre(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    const result = await createGenre(req);
    res.send(result);
});

//  ***** Put Request *****
router.put("/:id", async (req, res) => {
    const { error } = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    if(!genre) return res.status(404).send("Genre with given ID not found");

    res.send(genre);

});

//  ***** Delete Request *****
router.delete("/:id", async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if(!genre) return res.status(404).send("Genre with given ID not found");

    // const result = await Genres.findByIdAndDelete({_id: req.params.id}, {new: true});
    res.send(genre);
});

// Function to validate genres
function validateGenre(genre){
    const schema = Joi.object({ name: Joi.string().min(5).required()});
    return schema.validate(genre);
}

// Function to Get genres
async function getGenres(){
    const result = await Genre
        .find()
        .sort('name');

    return result;
}

// Function to Create genres
async function createGenre(genreInput){
    const genre = new Genre({ name: genreInput.body.name });

    const result = await genre.save();
    return result;
}

module.exports = router;