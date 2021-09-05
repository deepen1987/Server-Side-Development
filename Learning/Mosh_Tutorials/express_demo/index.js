const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const courses = require("./routes/courses");
const home = require("./routes/home");
const express = require("express");

const app = express();

app.set("view engine", "pug");

// console.log(`Node Env: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get("env")}`)

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.static("public"));
app.use(helmet());
if(app.get("env") === "development"){
    app.use(morgan("tiny"));
    startupDebugger("Morgan Enabled in Development Environment");
}

app.use("/api/courses", courses);
app.use("/", home);

// DB work
dbDebugger("Database Enabled")

// Configuration
console.log(`Application Name: ${config.get("name")}`);
console.log(`Mail Server Name: ${config.get("mail.host")}`);

app.use(logger);
app.use(auth);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));