import express from "express";
import pg from "pg";


const app = express();
const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testrestaurant',
    password: 'Welcome@1',
    port: 5436,
});

const a = 'Indian';
await client.connect().then(()=> console.log(`Connected to PostgreSQL`));
const res = await client.query(`Select cuisine_name from cuisines where cuisine_name = '${a}';`);
console.log(res.rows);

// const ins = await client.query(`Insert into users (user_id, address_id) values ('61901edc8d57a518b36728a4', 412)`);
// console.log(ins);




const port = process.env.PORT || 3000;


app.listen(port, ()=> { console.log(`Connected on port: ${port}`)});