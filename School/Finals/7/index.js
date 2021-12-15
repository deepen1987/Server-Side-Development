import express from "express";
import mysqlServer from "mysql2";

const app = express();
const port = process.env.PORT || 3000;
const url = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'serverside',
    port: 8889,
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mysql = mysqlServer.createConnection(url);
mysql.connect();

app.get("/final/exam/testSql", (req, res) => {
    mysql.query("INSERT INTO users(email, password) VALUES ('test@bu.edu', 'test_pswd')", (error, result) => {
        if (error) throw error;
        console.log("result", result);
    } );

    res.status(200).send("Query Executed Successfully");

})


app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on port: ${port}`);
});




