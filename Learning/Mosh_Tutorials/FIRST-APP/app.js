

// const logger = require("./logger");

// logger.log("message")


// ***** PATH Module ***** //

// const path = require("path")

// let pathObj = path.parse(__filename)

// console.log(pathObj)


// ***** OS Module ***** //

// const os = require("os")

// let totalMemory = os.totalmem()
// let freeMemory = os.freemem()


// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

// ***** File System Module ***** //

// const fs = require("fs");

// const files = fs.readdirSync("./")
// console.log(files)

// fs.readdir("7", function(err, files) {
//     if(err) console.log("Error", err);
//     else console.log("Result", files)
// })

// ***** Event Module ***** //

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// // Register an Event Listener
// // emitter.addListener()
// emitter.on("messageLogged", (arg) => {
//     console.log("Listener Called", arg);
// });

// // Raise an Event
// emitter.emit("messageLogged", {id: 1, url: "http://"})


// ***** Excercise with Logger and Event ***** //


// require("events");

// const Logger = require("./logger");
// const logger = new Logger()

// logger.on("logging", (arg) => {
//     console.log("Listener Called", arg);
// });

// logger.log("message")


// ***** HTTP Module ***** //

const http = require("http");

const server = http.createServer( (req, res) => {
    if(req.url === "/"){
        res.write("Hello World");
        res.end();
    }

    if(req.url === "/api/courses"){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

// server.on("connection", (socket) => {

//     console.log("New Connection")
// }) This is the base level way of creating a server

server.listen(3000);

console.log("Listening on port 3000...")