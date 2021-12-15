import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

let app = express();
const port = 3000;

let morganE = morgan("dev");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.get("/", (req, res, err) => {
    res.status(200).send({ message: "Greetings Guest", authenticated: false });
});

app.listen(port, ()=> {
    console.log(`Application started. Port: ${port}`);
});


