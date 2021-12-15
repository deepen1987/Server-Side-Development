import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
const url = `mongodb://localhost:27017/News`;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())

mongoose.connect(url)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log("Unable to connect to MongoDB..."))


const News = mongoose.model("News", new mongoose.Schema({
    caption: String,
    article: String,
}));

app.post("/post", async (req, res) => {

    let news = new News({
        caption: req.body.captionData,
        article: req.body.articleData
    });
    await news.save();
    res.status(201).send(news);
})

app.put("/put/:id", async (req, res) => {
    const newsid = await News.findById(req.params.id);
    if(!newsid) return res.status(400).send("News Article not Found.");

    if (newsid.caption !== req.body.captionData){
        newsid.caption = req.body.captionData;
    }
    if (newsid.article !== req.body.articleData){
        newsid.article = req.body.articleData;
    }
    let news = await newsid.save();

    res.send(news); 


})


app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});