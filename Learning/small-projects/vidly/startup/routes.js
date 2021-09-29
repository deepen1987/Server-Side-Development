const express = require("express");
const genreRoutes = require("../routes/genres.js");
const customerRoutes = require("../routes/customers.js");
const movieRoutes = require("../routes/movies.js");
const rentalRoutes = require("../routes/rentals.js");
const userRoutes = require("../routes/users.js");
const authRoutes = require("../routes/auth.js");
const error = require("../middleware/error.js");

module.exports = function(app){
    app.use(express.json());
    app.use("/api/auth", authRoutes);
    app.use("/api/genres", genreRoutes);
    app.use("/api/customers", customerRoutes);
    app.use("/api/movies", movieRoutes);
    app.use("/api/rentals", rentalRoutes);
    app.use("/api/users", userRoutes);
    app.use(error);
}