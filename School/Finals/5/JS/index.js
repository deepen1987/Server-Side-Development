import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const data = {
    name: "Charles Summer",
    age: 45.34,
    website: "https://www.test.com",
    height: "Not Disclosed",
    notes: "@copy; All Rights Reserved"
}

app.get("/", (req, res) => {
    res.status(200).send(data);
});


app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});