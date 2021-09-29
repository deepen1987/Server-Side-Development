const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function(){

    // Database connection
    mongoose.connect("mongodb://localhost/vidly")
        .then( () => winston.info("Connected to Mongo DB..."));

}
