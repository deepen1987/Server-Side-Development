import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Read:  https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

import { bookRoutes } from "./routes/book_route.js";
app.use("/book", bookRoutes);

app.listen(port, () => {
    console.info(`Application Started.  Port: ${port}`);
});

