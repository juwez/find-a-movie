const express = require('express');
const router = express.Router();
const repo = require('../data/movieRepo')
const filterMovies = require('../services/filterMovies')
const url = require('url')
const {HttpError} = require("http-errors");
const listEndpoints = require('express-list-endpoints')
const app = require("../app");


router.get("/year", async (req, res) => {
    let year = await repo.getYear();
    return res.send(
        {year: year})
        .status(200);
});
router.get("/metascore", async (req, res) => {
    let metascore = await repo.getMetascore();
    return res.send(
        {metascore: metascore})
        .status(200);
});

router.get("/getByParameter", async (req, res) => {
    let movies = await filterMovies.filterMovies(req.query.actor, req.query.genre, req.query.year, req.query.metascore);
    if (movies === HttpError) {
        return res.status(400)
    }
    return res.send(
        {movies})
        .status(200);
})


module.exports = router
