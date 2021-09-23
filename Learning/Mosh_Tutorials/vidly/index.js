// Vidly Application
// Create a service to manage list of generes http://vidly.com/api/genres
// Create/ Update/ Read / Delete from the list of genres.

const express = require("express");
const genreRoutes = require("./routes/genres.js");
const mongoose = require("mongoose");
const app = express();

// Database connection
mongoose.connect("mongodb://localhost/vidly")
    .then( () => console.log("Connected to Genres database on Mongo DB"))
    .catch( (err) => console.error("Not able to connect to Genres Database", err));

app.use(express.json());
app.use("/api/genres", genreRoutes)

// Setting up environment variable so the program will work on hosting environment.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }`));

