'use strict'
const path = require('path');
const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sankalp Arora'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Sankalp Arora'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'At your Service...'
    });
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