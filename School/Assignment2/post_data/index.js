import express from "express";
import { exampleRoute } from "./routes/example.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use("/course", exampleRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));