// Vidly Application
// Create a service to manage list of generes http://vidly.com/api/genres
// Create/ Update/ Read / Delete from the list of genres.

import Joi from "joi";
import express from "express";
// const express = require("express");
const app = express();
import router from "./routes/genres.mjs";

app.use(express.json());
app.use("/api/genres", router)

// Setting up environment variable so the program will work on hosting environment.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

