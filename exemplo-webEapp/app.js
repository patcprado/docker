const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
    user: 'example',
    host: 'db',
    database: 'exampledb',
    password: 'example',
    port: 5432,
});

pool.query(`
    CREATE TABLE IF NOT EXISTS tbl_user (
        id SERIAL PRIMARY KEY,
        user_name TEXT NOT NULL
    )
`, (err, res) => {
    if (err) {
        console.error('Error creating table', err);
    } else {
        console.log('Table created or exists already');
    }
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello World</h1>
        <form action="/submit" method="post">
            <input type="text" name="user_name" placeholder="Enter your name" required />
            <button type="submit">Enviar para o banco</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const userName = req.body.user_name;

    pool.query('INSERT INTO tbl_user (user_name) VALUES ($1)', [userName], (err, result) => {
        if (err) {
            console.error('Error inserting data', err);
            res.send('Error inserting data');
        } else {
            res.send('Data inserted successfully');
        }
    });
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});