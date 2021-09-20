import express from "express";
const app = express();

const servers = ['home-network', 'office-network', 'public-network']
app.get("/:id", (req, res) =>{
    console.log(req.params)
    res.send({
        server: servers[parseInt(req.params.id) - 1]
    })
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));

