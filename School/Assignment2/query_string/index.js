import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/:id", (req, res) => {
    const queryObj = req.query;
    let queryStr = '';
    for (const i in queryObj) {
        if(i){
            queryStr += `<li>${ i }: ${ queryObj[i]}</li>`
        }
    }
    res.send(`<ul>${ queryStr }</ul>`);
})

app.listen(port, ()=> console.log(`Listening on Port: ${port}`));
