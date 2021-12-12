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

mysql.query("INSERT INTO user (id, firstname, lastname, email) VALUES (7, 'hello', 'kumar', 'hello@k.com')", (error, result) => {
    if (error) throw error;
    console.log("result", result);
} );

mysql.query("SELECT * FROM user", (error, results) => {
    if(error) throw error;
    console.log("result", results);
    // mysql.end()
} )

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on port: ${port}`);
});




