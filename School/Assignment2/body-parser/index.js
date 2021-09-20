import express from "express";
import {exampleRoute} from "./routes/example.js";

let port = process.env.port || 2000;
let app = express();
 
// Read:  https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/homework", exampleRoute);

app.listen(port,() => {
    console.log(`Running on PORT ${port}`);
});