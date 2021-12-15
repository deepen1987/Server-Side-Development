import express from "express";
import router from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/readTestFile", router);
app.get("/", (req, res) => {
    res.send("success");
});


app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});
