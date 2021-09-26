const { Genre } = require("../models/genre.js");
const { Movie, validateMovie } = require("../models/movie.js");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


// Post a Movie
router.post("/", async (req, res) => {
    const { error } = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreid);
    if(!genre) return res.status(400).send("Invalid Genre");

    const movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    const result = await movie.save()
    res.send(result)
})

// Get all movies
router.get("/", async (req, res) => {
    const movie = await Movie.find().sort("title");
    res.send(movie);
});

// Get Movies by ID
router.get("/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if(!movie) return res.status(404).send("Movie not found");
    res.send(movie)
})

// Update movie by ID
router.put("/:id", async (req, res) =>{
    const { error } = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreid);
    if(!genre) return res.status(400).send("Invalid Genre");


    const movie = await Movie.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate  
        }, { new: true });
    if(!movie) return res.status(400).send("Movie with the given ID not found.");

    res.send(movie);
});

// Delete Movie
router.delete("/:id", async (req, res) =>{
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if(!movie) return res.status(400).send("Movie with given ID not found");

    res.send(movie);
}) 

module.exports = router;