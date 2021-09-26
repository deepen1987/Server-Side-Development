// Vidly Application
// Create a service to manage list of generes http://vidly.com/api/genres
// Create/ Update/ Read / Delete from the list of genres.
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const genreRoutes = require("./routes/genres.js");
const customerRoutes = require("./routes/customers.js");
const movieRoutes = require("./routes/movies.js");
const rentalRoutes = require("./routes/rentals.js");
const userRoutes = require("./routes/users.js");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Database connection
mongoose.connect("mongodb://localhost/vidly")
    .then( () => console.log("Connected to Genres database on Mongo DB"))
    .catch( (err) => console.error("Not able to connect to Genres Database", err));

app.use(express.json());
app.use("/api/genres", genreRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/rentals", rentalRoutes);
app.use("/api/users", userRoutes);

// Setting up environment variable so the program will work on hosting environment.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }`));

