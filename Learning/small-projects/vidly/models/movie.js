const Joi = require("joi");
const mongoose = require("mongoose");
const { Genre } = require("./genre.js");

const Movie = mongoose.model("Movie", new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 255
    },
    genre: {
        type: Genre.schema,
        required: true
    },
    numberInStock: {
        type: Number,
        default: 0,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
}))

function validateMovie(movie){
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).trim().required(),
        genreid: Joi.objectId().required(),
        numberInStock: Joi.number().default(0).min(0).max(255),
        dailyRentalRate: Joi.number().min(0).max(255).required()
    });
    return schema.validate(movie);
};

exports.Movie = Movie;
exports.validateMovie = validateMovie;