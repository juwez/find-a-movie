
const express = require('express');
const router = express.Router();
const fs = require('fs');

let readMe = fs.readFileSync('./textDir/endpointLogs.txt', 'utf8').split('\n');

/* GET home page. */

router.get('/', function(req, res, next) {
    let endpoints = fs.readFileSync('./textDir/endpointLogs.txt', 'utf8').split('\n');
    res.render('index', { title: 'MovieRecommender',endpoints:endpoints});
});
module.exports = router;
