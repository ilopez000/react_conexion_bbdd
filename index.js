// server/index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 4000;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coches'
});

app.get('/coches', (req, res) => {
  db.query('SELECT * FROM coches', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
