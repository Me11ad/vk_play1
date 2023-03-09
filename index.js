const express = require("express");
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/likesteam.db')

var app = express();


app.listen(8000, () => {
    console.log("Server is listening on port " + 8000);
});

app.get('/', (req, res) => {
    res.json('Молодец!')
})