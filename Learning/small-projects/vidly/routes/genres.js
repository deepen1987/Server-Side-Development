const auth = require("../middleware/auth.js");
const admin = require("../middleware/admin.js");
const { Genre, validateGenre} = require("../models/genre.js");
const express = require("express");
const mongoose = require ("mongoose");

const router = express.Router();

//  ***** Get Request *****
router.get("/", async (req, res) => {
    // throw new Error("Something has failed on system");
    const result = await getGenres();
    res.send(result);
});

router.get("/:id", async (req, res) => {
    const genre = await Genre
        .findById(req.params.id)
        .catch( () => null);

    if(!genre) res.status(404).send("Genre with given ID not found");
    res.send(genre);
});

//  ***** Post Request *****
router.post("/", auth, async (req, res) => {
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
router.delete("/:id", [auth, admin], async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if(!genre) return res.status(404).send("Genre with given ID not found");

    // const result = await Genres.findByIdAndDelete({_id: req.params.id}, {new: true});
    res.send(genre);
});

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