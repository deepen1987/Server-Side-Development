import express from "express";
const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

const port = process.env.PORT || 3001
app.listen(port, ()=> console.log(`Listening on port: ${port}`));