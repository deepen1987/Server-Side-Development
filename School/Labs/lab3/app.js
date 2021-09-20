import express from "express";
import { authRoutes } from "./routes/authentication_routes.js";


const app = express();
  
app.get('/',(req,res) => {
    res.status(403).send("Forbidden");
});

app.use("/auth", authRoutes);
  
const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Running on PORT ${port}`);
});