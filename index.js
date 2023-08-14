const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');

const PORT = 8000;
const app = express();

app.listen(PORT, () => console.log(`Port num is ${PORT}`));

// GET
app.get("/", (req, res) => {
    //res.json('Hello');
    res.send({
        "data": "benajjjs"
    })
    console.log('Hit home page'); 
});


app.get("/news", (req, res) => {
 
    console.log('Hit news page');
});


