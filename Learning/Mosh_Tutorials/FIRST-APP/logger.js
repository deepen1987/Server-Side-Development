const EventEmitter = require("events");

class Logger extends EventEmitter{

    log(message){
        console.log(message) 
        this.emit("logging", {data: "We have logged"});
    }

}

module.exports = Logger;