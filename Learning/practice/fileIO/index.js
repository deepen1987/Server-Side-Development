import express from "express";
import { routes } from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});

