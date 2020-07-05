'use strict'
const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});


app.get('/weather', (req, res) => {
    res.send({
        location: 'Jalandhar',
        forecase: 'Its 20 degrees cold'
    });
});

app.listen(3000, () => {
    console.log('Server is up on 3000');
});