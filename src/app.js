'use strict'
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsDirectoryPath = path.join(__dirname, '../templates/views');
const partialsDirectoryPath = path.join(__dirname, '../templates/partials');

// Setup handlebars location and views location
app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);
hbs.registerPartials(partialsDirectoryPath);

// Setup static directory to serve
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
        message: 'At your Service...',
        name: 'Sankalp Arora'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Jalandhar',
        forecase: 'Its 20 degrees cold'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sankalp Arora',
        errorMessage: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page Not Found',
        name: 'Sankalp Arora'
    })
});

app.listen(3000, () => {
    console.log('Server is up on 3000');
});