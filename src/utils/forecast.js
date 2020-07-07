'use strict'

const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=1033c76d0c1530af36960575ab2b03a8&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true}, (error, { body } = {}) => {

        if (error) {
            callback('Unable to connect to the weather services!', undefined);
        } else if (body.error){
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + '. It is ' + body.current.temperature + ' degrees outside and it feels like ' + body.current.feelslike);
        }
    });
};

module.exports = forecast;