import express from "express";
import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();

const app = express();
const port = process.env.PORT || 3000;
const url = "mongodb://localhost:27017";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=> {
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      let dbo = db.db("team");
      dbo.collection("teams").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result)
        db.close();
      });
    });

})






    app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});