import express from "express";

const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.MAX_FILESIZE_LIMIT);

app.listen(port, ()=>{
    console.info("Connected to Port")
});

// The command to run MAX_FILESIZE_LIMIT=1875 node2.js