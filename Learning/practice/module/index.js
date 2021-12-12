import express from "express";
import seasons from "./season.js";

const { getSeason } = seasons;

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/season", (req, res) => {
    const date = new Date();
    const season = getSeason(date);
    res.status(200).send(`Current Season is ${season}`);

})


app.listen(port, (err) => { 
    console.log(`Connected on PORT: ${port}`);
});